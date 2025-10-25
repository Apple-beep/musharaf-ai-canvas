import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

interface LetterGlitchProps {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  characters?: string;
  className?: string;
}

interface LetterCell {
  char: string;
  color: string;
  targetColor: string;
  colorProgress: number;
}

const FONT_SIZE = 16;
const CHAR_WIDTH = 10;
const CHAR_HEIGHT = 20;

const parseColor = (value: string) => {
  if (value.startsWith("rgb")) {
    const match = value
      .replace(/\s+/g, "")
      .match(/rgb[a]?\((\d+),(\d+),(\d+)/i);
    if (!match) return null;
    return {
      r: Number(match[1]),
      g: Number(match[2]),
      b: Number(match[3]),
    };
  }

  let hex = value.trim();
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_m, r, g, b) => `${r}${r}${g}${g}${b}${b}`);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

const interpolateColor = (
  start: { r: number; g: number; b: number },
  end: { r: number; g: number; b: number },
  factor: number,
) => {
  const mix = {
    r: Math.round(start.r + (end.r - start.r) * factor),
    g: Math.round(start.g + (end.g - start.g) * factor),
    b: Math.round(start.b + (end.b - start.b) * factor),
  };
  return `rgb(${mix.r}, ${mix.g}, ${mix.b})`;
};

const calculateGrid = (width: number, height: number) => {
  const columns = Math.max(1, Math.ceil(width / CHAR_WIDTH));
  const rows = Math.max(1, Math.ceil(height / CHAR_HEIGHT));
  return { columns, rows };
};

const LetterGlitch = ({
  glitchColors = ["#2b4539", "#61dca3", "#61b3dc"],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789",
  className,
}: LetterGlitchProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const letters = useRef<LetterCell[]>([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(Date.now());

  const palette = useMemo(
    () =>
      glitchColors.map((hex) => {
        const parsed = parseColor(hex);
        if (!parsed) return hex;
        const targetBrightness = 230;
        const currentBrightness = Math.max(parsed.r, parsed.g, parsed.b);
        const factor = targetBrightness / Math.max(currentBrightness, 1);
        const brightened = {
          r: Math.min(255, Math.round(parsed.r * factor * 0.9)),
          g: Math.min(255, Math.round(parsed.g * factor * 1.1)),
          b: Math.min(255, Math.round(parsed.b * factor * 1.2)),
        };
        return `rgb(${brightened.r}, ${brightened.g}, ${brightened.b})`;
      }),
    [glitchColors],
  );
  const lettersAndSymbols = useMemo(() => Array.from(characters), [characters]);

  const getRandomChar = () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  const getRandomColor = () => palette[Math.floor(Math.random() * palette.length)];

  const drawLetters = () => {
    const canvas = canvasRef.current;
    const ctx = context.current;
    if (!canvas || !ctx || !letters.current.length || !grid.current.columns) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${FONT_SIZE}px monospace`;
    ctx.textBaseline = "top";

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * CHAR_WIDTH;
      const y = Math.floor(index / grid.current.columns) * CHAR_HEIGHT;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  };

  const initializeLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows };
    const total = columns * rows;
    letters.current = Array.from({ length: total }, () => {
      const initialColor = getRandomColor();
      return {
        char: getRandomChar(),
        color: initialColor,
        targetColor: getRandomColor(),
        colorProgress: 1,
      };
    });
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    context.current = ctx;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    drawLetters();
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;

    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress = Math.min(1, letter.colorProgress + 0.05);

        const start = parseColor(letter.color);
        const target = parseColor(letter.targetColor);
        if (start && target) {
          letter.color = interpolateColor(start, target, letter.colorProgress);
          needsRedraw = true;
        }
      }
    });

    if (needsRedraw) {
      drawLetters();
    }
  };

  const updateLetters = () => {
    if (!letters.current.length) return;
    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      const cell = letters.current[index];
      if (!cell) continue;

      cell.char = getRandomChar();
      cell.targetColor = getRandomColor();

      if (!smooth) {
        cell.color = cell.targetColor;
        cell.colorProgress = 1;
      } else {
        cell.colorProgress = 0;
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();

    const animate = () => {
      const now = Date.now();
      if (now - lastGlitchTime.current >= glitchSpeed) {
        updateLetters();
        drawLetters();
        lastGlitchTime.current = now;
      }

      if (smooth) {
        handleSmoothTransitions();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        resizeCanvas();
        animate();
      }, 120);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed, smooth, palette, characters]);

  const containerStyle = useMemo(
    () => ({
      position: "relative" as const,
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      overflow: "hidden" as const,
      pointerEvents: "none" as const,
    }),
    [],
  );

  const canvasStyle = useMemo(
    () => ({
      display: "block",
      width: "100%",
      height: "100%",
    }),
    [],
  );

  const outerVignetteStyle = useMemo(
    () => ({
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none" as const,
      background: "radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.85) 100%)",
    }),
    [],
  );

  const centerVignetteStyle = useMemo(
    () => ({
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none" as const,
      background: "radial-gradient(circle, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 60%)",
    }),
    [],
  );

  return (
    <div className={cn(className)} style={containerStyle}>
      <canvas ref={canvasRef} style={canvasStyle} />
      {outerVignette && <div style={outerVignetteStyle} />}
      {centerVignette && <div style={centerVignetteStyle} />}
    </div>
  );
};

export default LetterGlitch;

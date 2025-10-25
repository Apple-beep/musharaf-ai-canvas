import React, { useEffect, useRef, useState } from "react";

type AvatarUploadProps = {
  size?: number;
  src?: string;
  onChange?: (file: File) => void;
};

const AvatarUpload: React.FC<AvatarUploadProps> = ({ size = 256, src, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | undefined>(src);

  useEffect(() => {
    setPreview(src);
  }, [src]);

  const openPicker = () => inputRef.current?.click();

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!/image\/(png|jpeg|jpg)/.test(file.type)) {
      alert("Please upload a PNG or JPEG image.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Please choose an image smaller than 5MB.");
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
    onChange?.(file);
  };

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const buttonStyle = size
    ? {
        width: size,
        height: size,
      }
    : undefined;

  return (
    <div className="relative select-none">
      <button
        type="button"
        aria-label="Update photo"
        onClick={openPicker}
        className={[
          "group relative flex h-full w-full overflow-hidden rounded-full ring-1 ring-white/10",
          "shadow-[0_0_80px_-20px_rgba(80,220,255,0.55)] backdrop-blur-sm",
          "transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
        ].join(" ")}
        style={buttonStyle}
      >
        {preview ? (
          <img
            src={preview}
            alt="Portrait of Musharaf Khan Pathan"
            className="h-full w-full rounded-full object-cover brightness-110 contrast-105 transition-all duration-200 group-hover:brightness-125 group-hover:contrast-110"
            style={{
              objectPosition: "50% 58%",
              transform: "scale(1.04)",
              transformOrigin: "50% 58%",
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-black/60">
            <span className="text-4xl font-semibold tracking-[0.2em] text-cyan-300">MKP</span>
          </div>
        )}
        <span
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "0 0 0 2px rgba(255,255,255,0.10) inset, 0 0 240px rgba(80,220,255,0.48)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/0 to-cyan-400/[0.06] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200 ring-1 ring-white/10">
            Update photo
          </span>
        </div>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={handleFile}
      />
    </div>
  );
};

export default AvatarUpload;

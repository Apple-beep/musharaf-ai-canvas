import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <div className="text-center space-y-6 glass-card p-12 max-w-md">
        <div className="text-8xl font-heading font-bold gradient-text">404</div>
        <h1 className="text-2xl font-bold">Oops! Page not found</h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-neon-cyan text-background font-medium hover:bg-neon-cyan/90 transition-colors magnetic-btn"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

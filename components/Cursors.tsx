import { useState, useEffect } from "react";
import { BsCursorFill } from "react-icons/bs";

interface CursorState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  isMoving: boolean;
  pauseUntil: number;
  opacity: number;
  color?: string;
  // New properties for natural movement
  controlX: number;
  controlY: number;
  startX: number;
  startY: number;
  progress: number;
  speed: number;
}

export const Cursors = () => {
  const [cursors, setCursors] = useState<CursorState[]>([
    {
      x: 80,
      y: 80,
      color: "#ec003f",
      targetX: 80,
      targetY: 80,
      isMoving: false,
      pauseUntil: Date.now() + 1000,
      opacity: 0,
      controlX: 80,
      controlY: 80,
      startX: 80,
      startY: 80,
      progress: 0,
      speed: 0.008 + Math.random() * 0.004,
    },
    {
      x: 300,
      y: 160,
      color: "#8e51ff",
      targetX: 300,
      targetY: 160,
      isMoving: false,
      pauseUntil: Date.now() + 2000,
      opacity: 0,
      controlX: 300,
      controlY: 160,
      startX: 300,
      startY: 160,
      progress: 0,
      speed: 0.008 + Math.random() * 0.004,
    },
    {
      x: 500,
      y: 400,
      color: "#74d4ff",
      targetX: 500,
      targetY: 400,
      isMoving: false,
      pauseUntil: Date.now() + 3000,
      opacity: 0,
      controlX: 500,
      controlY: 400,
      startX: 500,
      startY: 400,
      progress: 0,
      speed: 0.008 + Math.random() * 0.004,
    },
  ]);

  const getRandomTarget = () => {
    const margin = 60;
    return {
      x: margin + Math.random() * (window.innerWidth - margin * 2),
      y: margin + Math.random() * (window.innerHeight - margin * 2),
    };
  };

  // Easing function for smooth acceleration/deceleration
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Quadratic Bezier curve calculation
  const getPointOnCurve = (
    start: number,
    control: number,
    end: number,
    t: number,
  ): number => {
    const easedT = easeInOutCubic(t);
    return (
      Math.pow(1 - easedT, 2) * start +
      2 * (1 - easedT) * easedT * control +
      Math.pow(easedT, 2) * end
    );
  };

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setCursors((prev) => prev.map((cursor) => ({ ...cursor, opacity: 1 })));
    }, 2000);
    return () => clearTimeout(fadeInTimer);
  }, []);

  useEffect(() => {
    const animateCursors = () => {
      setCursors((prev) =>
        prev.map((cursor) => {
          const now = Date.now();

          if (now < cursor.pauseUntil || cursor.opacity < 1) {
            return cursor;
          }

          if (!cursor.isMoving) {
            const target = getRandomTarget();
            // Create a curved path by adding a control point
            const midX = (cursor.x + target.x) / 2;
            const midY = (cursor.y + target.y) / 2;

            // Add some randomness to the control point for curved movement
            const curvature = 50 + Math.random() * 100;
            const angle = Math.random() * Math.PI * 2;
            const controlX = midX + Math.cos(angle) * curvature;
            const controlY = midY + Math.sin(angle) * curvature;

            return {
              ...cursor,
              targetX: target.x,
              targetY: target.y,
              controlX,
              controlY,
              startX: cursor.x,
              startY: cursor.y,
              isMoving: true,
              progress: 0,
              speed: 0.004 + Math.random() * 0.004, // Randomize speed for each movement
            };
          }

          // Animate along the curve
          const newProgress = Math.min(cursor.progress + cursor.speed, 1);

          if (newProgress >= 1) {
            // Movement complete, pause
            const pauseDuration = 800 + Math.random() * 2000;
            return {
              ...cursor,
              x: cursor.targetX,
              y: cursor.targetY,
              isMoving: false,
              pauseUntil: now + pauseDuration,
              progress: 0,
            };
          }

          // Calculate position along the curve
          const newX = getPointOnCurve(
            cursor.startX,
            cursor.controlX,
            cursor.targetX,
            newProgress,
          );
          const newY = getPointOnCurve(
            cursor.startY,
            cursor.controlY,
            cursor.targetY,
            newProgress,
          );

          return {
            ...cursor,
            x: newX,
            y: newY,
            progress: newProgress,
          };
        }),
      );
    };

    const interval = setInterval(animateCursors, 16);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
      {cursors.map((cursor, index) => (
        <div
          key={index}
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
            opacity: cursor.opacity,
            transform: "translate(-10px, -10px)", // Center the cursor
          }}
        >
          <BsCursorFill
            className="scale-x-[-1] w-5 h-5"
            style={{
              color: cursor.color ?? "#ee6055",
            }}
          />
        </div>
      ))}
    </div>
  );
};

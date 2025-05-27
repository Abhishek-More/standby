import { BsCursorFill } from "react-icons/bs";
import { useState, useEffect } from "react";

interface CursorState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  isMoving: boolean;
  pauseUntil: number;
  opacity: number;
  color?: string;
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
    },
  ]);

  const getRandomTarget = () => {
    const margin = 60;
    return {
      x: margin + Math.random() * (window.innerWidth - margin * 2),
      y: margin + Math.random() * (window.innerHeight - margin * 2),
    };
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
            return {
              ...cursor,
              targetX: target.x,
              targetY: target.y,
              isMoving: true,
            };
          }

          const dx = cursor.targetX - cursor.x;
          const dy = cursor.targetY - cursor.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 1) {
            const pauseDuration = 800 + Math.random() * 2000;
            return {
              ...cursor,
              x: cursor.targetX,
              y: cursor.targetY,
              isMoving: false,
              pauseUntil: now + pauseDuration,
            };
          }

          const speed = 0.02 + Math.random() * 0.01;
          const newX = cursor.x + dx * speed;
          const newY = cursor.y + dy * speed;

          return {
            ...cursor,
            x: newX,
            y: newY,
          };
        }),
      );
    };

    const interval = setInterval(animateCursors, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
      {cursors.map((cursor, index) => {
        return (
          <div
            key={index}
            className="absolute text-2xl pointer-events-none transition-opacity duration-300"
            style={{
              left: `${cursor.x}px`,
              top: `${cursor.y}px`,
              opacity: cursor.opacity,
            }}
          >
            <BsCursorFill
              className="scale-x-[-1] w-5 h-5"
              style={{
                color: cursor.color ?? "#ee6055",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

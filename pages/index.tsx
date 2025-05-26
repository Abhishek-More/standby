import { Geist, Geist_Mono } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineBuild } from "react-icons/ai";
import { BsCursorFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { CompanyMarquee } from "@/components/CompanyMarquee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface CursorState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  isMoving: boolean;
  pauseUntil: number;
}

export default function Home() {
  const [cursors, setCursors] = useState<CursorState[]>([
    {
      x: 80,
      y: 80,
      targetX: 80,
      targetY: 80,
      isMoving: false,
      pauseUntil: Date.now() + 1000,
    },
    {
      x: 300,
      y: 160,
      targetX: 300,
      targetY: 160,
      isMoving: false,
      pauseUntil: Date.now() + 2000,
    },
    {
      x: 500,
      y: 400,
      targetX: 500,
      targetY: 400,
      isMoving: false,
      pauseUntil: Date.now() + 3000,
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
    const animateCursors = () => {
      setCursors((prev) =>
        prev.map((cursor, index) => {
          const now = Date.now();

          // If we're in a pause period, don't move
          if (now < cursor.pauseUntil) {
            return cursor;
          }

          // If we're not moving and pause is over, pick a new target
          if (!cursor.isMoving) {
            const target = getRandomTarget();
            return {
              ...cursor,
              targetX: target.x,
              targetY: target.y,
              isMoving: true,
            };
          }

          // Move towards target
          const dx = cursor.targetX - cursor.x;
          const dy = cursor.targetY - cursor.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          //
          // // If we're close to target, stop and pause
          if (distance < 1) {
            const pauseDuration = 800 + Math.random() * 2000; // 0.8-2.3 seconds
            return {
              ...cursor,
              x: cursor.targetX,
              y: cursor.targetY,
              isMoving: false,
              pauseUntil: now + pauseDuration,
            };
          }

          // Move towards target with easing
          const speed = 0.02 + Math.random() * 0.01; // Variable speed between cursors
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

    const interval = setInterval(animateCursors, 16); // ~60fps for smooth movement
    return () => clearInterval(interval);
  }, []);

  const dateNow = new Date();

  return (
    <div
      className="min-h-screen bg-white relative h-screen overflow-hidden"
      style={{
        backgroundImage: `
      radial-gradient(ellipse at center, transparent 80%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0.95) 100%),
      radial-gradient(circle, #d3d3d3 1px, transparent 1px)
    `,
        backgroundSize: "100% 100%, 20px 20px",
      }}
    >
      <div className="relative container mx-auto px-4 py-8 h-full">
        <div className="absolute flex justify-between items-center top-4 left-4 right-4">
          <div className="flex items-center gap-4">
            <AiOutlineBuild className="text-4xl text-[#ee6055]" />
            <p className="text-black/80 font-bold">Scaffold</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://x.com">
              <FaXTwitter className="text-black text-lg hover:text-[#ee6055] transition-colors" />
            </Link>
            <Link href="https://github.com">
              <FaGithub className="text-black text-lg hover:text-[#ee6055] transition-colors" />
            </Link>
          </div>
        </div>

        {cursors.map((cursor, index) => (
          <div
            key={index}
            className="absolute text-[#000000] text-2xl pointer-events-none transition-opacity duration-300"
            style={{
              left: `${cursor.x}px`,
              top: `${cursor.y}px`,
            }}
          >
            <BsCursorFill
              className="text-[#ee6055] scale-x-[-1] w-4 h-4"
              strokeWidth="1"
              stroke="black"
            />
          </div>
        ))}

        {/* Main content */}
        <div className="flex flex-col justify-center max-w-4xl mx-auto text-center h-full mt-16">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-none">
              <span className="text-black">a new way to </span>
              <span className="text-[#ee6055]">interview</span>
            </h1>

            <p className="text-[#6b7280] mx-auto text-lg md:text-xl mb-16 max-w-3xl leading-tight">
              traditional interviews are{" "}
              <span className="rotate-[8deg] transform inline-block">
                {" "}
                broken{" "}
              </span>
              . no more competitive programming or google doc awkwardness —
              starting with system design, we're revolutionizing technical
              hiring.
            </p>

            {/* Email signup form */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your email"
                className="h-10 focus:border-red-500 focus:outline-red-500 outline-1 bg-white text-black rounded-sm"
              />
              <Button className="bg-[#ee6055] hover:bg-[#ee6055]/90 text-white h-10 px-8 font-bold whitespace-nowrap cursor-pointer w-full sm:w-auto rounded-sm">
                join the waitlist
              </Button>
            </div>

            {/* Join count */}
            <p className="text-[#6b7280] text-lg">
              join <span className="text-[#ee6055] font-semibold">130</span>{" "}
              others waiting for scaffold!
            </p>
          </div>

          <div className="">
            <p className="text-[#6b7280] text-lg mt-32 mb-4 text-center">
              built by engineers from
            </p>
            <CompanyMarquee />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float1 {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(150px, -50px);
          }
          50% {
            transform: translate(300px, 100px);
          }
          75% {
            transform: translate(100px, 200px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes float2 {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(-100px, 80px);
          }
          40% {
            transform: translate(-200px, -20px);
          }
          60% {
            transform: translate(-80px, -120px);
          }
          80% {
            transform: translate(50px, -50px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes float3 {
          0% {
            transform: translate(0, 0);
          }
          30% {
            transform: translate(-120px, -80px);
          }
          50% {
            transform: translate(-250px, 50px);
          }
          70% {
            transform: translate(-100px, 150px);
          }
          90% {
            transform: translate(80px, 80px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
}

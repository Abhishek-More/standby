import { CompanyMarquee } from "@/components/CompanyMarquee";
import { Cursors } from "@/components/Cursors";
import { Navbar } from "@/components/Navbar";
import { Signup } from "@/components/Signup";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-white relative h-dvh overflow-hidden"
      style={{
        backgroundImage: `
      radial-gradient(ellipse at center, transparent 80%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0.95) 100%),
      radial-gradient(circle, #d3d3d3 1px, transparent 1px)
    `,
        backgroundSize: "100% 100%, 20px 20px",
      }}
    >
      <div className="relative container mx-auto px-4 py-8 h-full">
        <Navbar />
        <Cursors />

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
              starting with system design, we&apos;re revolutionizing technical
              hiring.
            </p>

            <Signup />

            <p className="text-[#6b7280] text-lg">
              join <span className="text-[#ee6055] font-semibold">130</span>{" "}
              others waiting for scaffold!
            </p>
          </div>

          <div>
            <p className="text-[#6b7280] text-lg mt-32 mb-4 text-center">
              built by engineers from
            </p>
            <CompanyMarquee />
          </div>
        </div>
      </div>
    </div>
  );
}

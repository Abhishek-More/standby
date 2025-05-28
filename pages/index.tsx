import { CompanyMarquee } from "@/components/CompanyMarquee";
import { Cursors } from "@/components/Cursors";
import { Navbar } from "@/components/Navbar";
import { Signup } from "@/components/Signup";
import { Subscribers } from "@/components/Subscribers";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:title" content="Standby for Scaffold" />
        <meta property="og:description" content="A new way to interview" />
        <meta property="og:url" content="https://interviewing.sucks" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col justify-center h-10 w-screen bg-[#B864E9] text-white">
        <p className="text-center text-">sign up now for early access!</p>
      </div>
      <div
        className="bg-white relative overflow-x-hidden px-4 min-h-screen"
        style={{
          backgroundImage: `
      radial-gradient(ellipse at center, transparent 80%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0.95) 100%),
      radial-gradient(circle, #d3d3d3 1px, transparent 1px)
    `,
          backgroundSize: "100% 100%, 20px 20px",
        }}
      >
        <Navbar />
        <Cursors />

        <div className="max-w-4xl mx-auto mt-16 md:mt-40 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-none">
            <span className="text-black">a new way to </span>
            <span className="text-[#B864E9]">interview</span>
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
          <Subscribers />
        </div>

        <div className="max-w-4xl mx-auto my-16">
          <p className="text-[#6b7280] text-lg mt-32 mb-4 text-center">
            built with 💜 by engineers from
          </p>
          <CompanyMarquee />
        </div>
      </div>
    </>
  );
}

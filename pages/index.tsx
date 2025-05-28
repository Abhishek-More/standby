import { CompanyMarquee } from "@/components/CompanyMarquee";
import { Cursors } from "@/components/Cursors";
import { Navbar } from "@/components/Navbar";
import { Signup } from "@/components/Signup";
import { Subscribers } from "@/components/Subscribers";
import "@xyflow/react/dist/style.css";
import Head from "next/head";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Standby for Scaffold",
  description:
    "a new way to interview: traditional interviews are broken. no more competitive programming or google doc awkwardness — starting with system design, we're revolutionizing technical hiring.",
  keywords: [
    "interview",
    "leetcode",
    "system design",
    "scaffold",
    "comptetitive programming",
    "software engineering",
    "computer science",
  ],
  openGraph: {
    url: "https://interviewing.sucks",
    type: "website",
    title: "Standby for Scaffold",
    description: "a new way to interview",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 628,
        alt: "Scaffold",
      },
    ],
  },
};

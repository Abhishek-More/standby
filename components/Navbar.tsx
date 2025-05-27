import { AiFillMail, AiOutlineBuild, AiOutlineMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { IoCalendarSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { Toaster, toast } from "react-hot-toast";
import { CONTACT_EMAIL } from "@/lib/consts";

export const Navbar = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    toast.success("Email copied to clipboard!");
  };

  return (
    <div className="flex justify-between items-center mt-4 max-w-6xl mx-auto">
      <Toaster position="bottom-right" />
      <div className="flex items-center gap-4">
        <AiOutlineBuild className="text-4xl text-[#B864E9]" />
        <p className="text-black/80 font-bold">Scaffold</p>
      </div>
      <div className="flex items-center gap-4">
        <a onClick={() => copyEmail()}>
          <AiFillMail className="text-black text-xl hover:text-[#B864E9] transition-colors cursor-pointer" />
        </a>
        <Link
          href="https://calendly.com/anishkarthik21/scaffold-intro"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoCalendarSharp className="text-black text-lg hover:text-[#B864E9] transition-colors" />
        </Link>
        <Link
          href="https://x.com/helloscaffold"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaXTwitter className="text-black text-lg hover:text-[#B864E9] transition-colors" />
        </Link>
        <Link
          href="https://github.com/Abhishek-More/standby"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="text-black text-lg hover:text-[#B864E9] transition-colors" />
        </Link>
      </div>
    </div>
  );
};

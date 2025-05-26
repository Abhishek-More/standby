import { AiOutlineBuild } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="absolute flex justify-between items-center top-4 left-4 right-4">
      <div className="flex items-center gap-4">
        <AiOutlineBuild className="text-4xl text-[#ee6055]" />
        <p className="text-black/80 font-bold">Scaffold</p>
      </div>
      <div className="flex items-center gap-4">
        <Link href="https://x.com">
          <FaXTwitter className="text-black text-lg hover:text-[#ee6055] transition-colors" />
        </Link>
        <Link href="https://github.com/Abhishek-More/standby">
          <FaGithub className="text-black text-lg hover:text-[#ee6055] transition-colors" />
        </Link>
      </div>
    </div>
  );
};

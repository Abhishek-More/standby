import Marquee from "react-fast-marquee";
import Image from "next/image";
export const CompanyMarquee = () => {
  return (
    <Marquee
      className="bg-white border rounded-sm py-4 w-full overflow-hidden overscroll-none"
      gradient
    >
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        }
        alt="Company Logo"
        width={100}
        height={40}
        className="mx-4 grayscale hover:grayscale-0 transition duration-300"
      />

      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
        }
        alt="Company Logo"
        width={100}
        height={40}
        className="mx-4 grayscale hover:grayscale-0 transition duration-300"
      />

      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        }
        alt="Company Logo"
        width={100}
        height={40}
        className="mx-4 grayscale hover:grayscale-0 transition duration-300"
      />

      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/3/3d/Kleiner_Perkins_logo_black.svg"
        }
        alt="Company Logo"
        width={200}
        height={40}
        className="mx-4 grayscale hover:grayscale-0 transition duration-300"
      />

      <Image
        src={"/dripos.png"}
        alt="Company Logo"
        width={100}
        height={40}
        className="mx-4 grayscale hover:grayscale-0 transition duration-300"
      />

      <Image
        src={"https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg"}
        alt="Company Logo"
        width={50}
        height={40}
        className="mx-4 grayscale hover:grayscale-0 transition duration-300"
      />

      <Image
        src={"https://tamuhack.org/static/assets/tamuhacfull_k.svg"}
        alt="Company Logo"
        width={100}
        height={40}
        className="mx-4 grayscale hover:grayscale-0 transition duration-300"
      />
    </Marquee>
  );
};

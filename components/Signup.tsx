import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Signup = () => {
  return (
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
  );
};

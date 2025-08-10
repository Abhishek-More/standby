import { Button } from "@/components/ui/button";

export const Signup = () => {
  const handleLogin = () => {
    window.location.href = "https://createscaffold.app/login";
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Button
        onClick={handleLogin}
        className="bg-[#B864E9] hover:bg-[#B864E9]/90 text-white h-14 px-12 text-lg font-bold cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
      >
        Get Started!
      </Button>
    </div>
  );
};

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ListRequests } from "@/lib/ListRequests";
import { Toaster, toast } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { mutate } from "swr";

type Inputs = {
  email: string;
};

export const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await ListRequests.subscribe(data.email);
    const json = await res.json();
    const message = json?.message;

    if (!res.ok) {
      toast.error(message ?? "Failed to submit email!", {
        duration: 5000,
      });
      return;
    }

    toast.success(message ?? "Sucessfully subscribed!", {
      duration: 5000,
    });
    mutate("/api/list/fetch-count");
    reset();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 w-full">
      <Toaster position="bottom-right" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-4 w-full mx-auto items-center max-w-[400px]"
      >
        <Input
          type="email"
          placeholder="your email"
          className={`h-10 focus:border-red-500 focus:outline-red-500 outline-1 bg-white text-black rounded-sm w-full`}
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", { required: true })}
        />
        <Button
          type="submit"
          className="bg-[#B864E9] hover:bg-[#B864E9]/90 text-white h-10 px-8 font-bold whitespace-nowrap cursor-pointer w-full sm:w-auto rounded-sm"
        >
          join the waitlist
        </Button>
      </form>
    </div>
  );
};

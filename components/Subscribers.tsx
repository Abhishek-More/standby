import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import NumberFlow from "@number-flow/react";

export const Subscribers = () => {
  const { data } = useSWR(`/api/list/fetch-count`, fetcher);

  return (
    <div className="flex gap-1 items-center justify-center w-full">
      <NumberFlow
        value={data?.count || 0}
        isolate
        className="text-[#B864E9] font-semibold tabular-nums"
      />
      <p className="text-[#6b7280] text-lg">others are waiting for Scaffold!</p>
    </div>
  );
};

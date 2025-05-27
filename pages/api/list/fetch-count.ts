import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type ResponseData = {
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ count: 0 });
  }

  try {
    const count = await prisma.subscriber.count();
    return res.status(200).json({ count });
  } catch {
    return res.status(500).json({ count: 0 });
  }
}

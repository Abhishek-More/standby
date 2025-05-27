import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address!" });
  }

  if (await prisma.subscriber.findFirst({ where: { email } })) {
    return res.status(200).json({ message: "Email already subscribed!" });
  }

  try {
    await prisma.subscriber.create({
      data: { email },
    });
    return res.status(200).json({ message: "Successfully subscribed!" });
  } catch {
    return res.status(500).json({ message: "Failed to subscribe!" });
  }
}

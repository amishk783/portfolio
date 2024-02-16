// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type Data = {
  name: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const formData = req.body;

  const { data, error } = await resend.emails.send({
    from: "onboardding@resend.dev",
    to: "amishkumar800@gmail.com",
    subject: "You got an email",
    html: "",
  });
  console.log(data);

  res.status(200).json({ name: "John Doe" });
}

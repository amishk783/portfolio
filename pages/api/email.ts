// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import PortfolioEmail from "@/components/Email/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const formData = req.body;
  const { name, email, message, phoneNo, subject, budget } = formData;


  try {
    const { data, error } = await resend.emails.send({
      from: "Amish <amish@update.myselfhosted.cloud>",
      to: [formData.email],
      subject: `${name} has a message!`,
      react: PortfolioEmail({ name, email, message, phoneNo, subject, budget }),
    });

    if (error) {
      
      return res.status(400).json({ error });
    }

    return res.status(200).json({ data });
  } catch (error) {

    return res.status(400).json({ error: error });
  }
}

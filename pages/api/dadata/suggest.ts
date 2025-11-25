import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const DADATA_API_URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query, count = 7 } = req.body;

  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "Query is required" });
  }

  const apiKey = process.env.DADATA_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "DaData API key not configured" });
  }

  try {
    const { data } = await axios.post(
      DADATA_API_URL,
      { query, count },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${apiKey}`,
        },
      }
    );

    return res.status(200).json(data);
  } catch (error) {
    console.error("DaData API error:", error);
    return res.status(500).json({ error: "Failed to fetch suggestions" });
  }
}

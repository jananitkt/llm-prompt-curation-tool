import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.post("/api/compare", async (req, res) => {
  const { originalPrompt, curatedPrompt } = req.body;

  const callLLM = async (prompt) => {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct:free",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 300
        })
      });

      const data = await response.json();
      return data.choices?.[0]?.message?.content || "No response";
    } catch (err) {
      console.error("LLM error:", err);
      return "LLM request failed.";
    }
  };

  const originalResponse = await callLLM(originalPrompt);
  const curatedResponse = await callLLM(curatedPrompt);

  res.json({ originalResponse, curatedResponse });
});

app.listen(PORT, () => {
  console.log(`✅ LLM Curation Server running on http://localhost:${PORT}`);
});

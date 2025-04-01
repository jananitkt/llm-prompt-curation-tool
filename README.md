
# 🧠 LLM Test-Time Prompt Curation (OpenRouter Powered)

A full-stack AI research project developed by **Janani Thamilarasu** to explore **test-time scaling** — improving LLM performance at inference time through better prompt design.

---

## 🔍 What Is This Project?

This tool lets users:
- Submit a raw prompt (original)
- Submit an improved (curated) version of the prompt
- Compare how an LLM like Mistral-7B responds to both
- Learn how formatting, structure, and examples affect AI output

---

## 📸 Preview

<img src="https://github.com/jananitkt/llm-prompt-curation-tool/blob/main/preview.png" alt="llm-prompt-curation-tool UI Screenshot" width="100%" />

---

## 🎯 Why We Built This

Prompt quality directly affects LLM performance. This project simulates:
- Few-shot learning
- Prompt optimization
- Test-time tuning (without retraining the model)

It’s ideal for students, researchers, and junior ML engineers to **experiment with prompt engineering** using real-world tools.

---

## 🧪 3 Example Test Cases

### ✅ Scenario 1 – Translation Prompt

**Original Prompt:**
```text
Translate:
Hello
Thank you
Good night
```

**Curated Prompt:**
```text
"Hello" => "Hola"
"Thank you" => "Gracias"
"Good night" => "Buenas noches"
```

---

### ⚠️ Scenario 2 – Marketing Headline Generator

**Original Prompt:**
```text
write subject lines for discounts
```

**Curated Prompt:**
```text
Write 3 short, catchy subject lines for a 50% discount promo campaign.
Examples:
1. Save Big Now!
2. 50% Off – Limited Time
3. Don’t Miss the Deal!
```

---

### 🧮 Scenario 3 – Math Word Problem

**Original Prompt:**
```text
a car goes 60km in 2 hours what is speed
```

**Curated Prompt:**
```text
Q: A car travels 60 km in 2 hours. What is the speed?
A: Speed = Distance / Time = 60 / 2 = 30 km/h
```

---

## 🔐 How to Get an OpenRouter API Key

1. Visit: [https://openrouter.ai](https://openrouter.ai)
2. Sign up with your email or GitHub
3. Go to: [https://openrouter.ai/keys](https://openrouter.ai/keys)
4. Click **"Create key"**
5. Copy your key (starts with `sk-or-v1-...`)
6. Add it to a `.env` file like this:
```env
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

⚠️ Do **not share this key publicly**

---

## 🚀 How to Run Locally

```bash
npm install
node server.mjs
```

Open in your browser:
```
http://localhost:3000
```

---

## 📁 Folder Structure

```
📦 llm-prompt-curation-tool/
 ┣ 📄 .env              ← your OpenRouter key (not included here)
 ┣ 📄 .gitignore        ← hides .env from GitHub
 ┣ 📄 server.mjs
 ┣ 📁 public/
 ┃ ┣ 📄 index.html
 ┃ ┗ 📄 script.js
 ┗ 📄 README.md
```

---

## 🧠 Educational Goals

- Test-time prompt optimization
- Prompt engineering strategies
- LLM response behavior
- Full-stack integration with AI APIs
- Secure environment variable management

---

Created with ❤️ by [Janani Thamilarasu](https://github.com/jananitkt)

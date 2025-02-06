import { GoogleGenerativeAI } from "@google/generative-ai";

// Function to generate content using Google Generative AI
export async function generateContent(prompt) {
  try {
    const genAI = new GoogleGenerativeAI("AIzaSyBqOh40tH8QTxsiSaifBiH3n68qjWMaTAg");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}


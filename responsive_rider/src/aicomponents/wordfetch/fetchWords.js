import { GoogleGenerativeAI } from "@google/generative-ai";
import { checkAndPostWord } from "./generateWord";

export async function fetchUniqueWord() {
  try {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let newWordData = null;

    while (!newWordData) {
      const prompt = `
        Generate a random word commonly used in daily life or useful for vocabulary enhancement. 
        Ensure that the word is not already present in the provided Firebase database. 
        Provide the result in JSON format: {word: "word", meaning: "meaning"}. 
        Return ONLY the JSON response without additional text, explanations, or formatting.
        Return ONLY the JSON without backticks or language specifiers
      `;

      const result = await model.generateContent(prompt);
      newWordData = JSON.parse(result.response.text());

      // Check if word exists in Firebase, if not, post it
      const isUnique = await checkAndPostWord(newWordData);
      if (!isUnique) newWordData = null; // Retry if the word is already in Firebase
    }

    return newWordData;
  } catch (error) {
    console.error("Error generating content:", error);
    return { word: "Error", meaning: "Could not fetch word" };
  }
}
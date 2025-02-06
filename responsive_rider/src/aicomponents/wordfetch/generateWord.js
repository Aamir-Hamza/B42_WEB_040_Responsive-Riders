import axios from "axios";

const FIREBASE_URL = import.meta.env.VITE_API_URL;

export async function checkAndPostWord(wordData) {
  try {
    const response = await axios.get(FIREBASE_URL);
    const existingWords = response.data ? Object.values(response.data).map(w => w.word) : [];

    if (existingWords.includes(wordData.word)) {
      return false; // Word already exists
    }

    await axios.post(FIREBASE_URL, wordData);
    return true; // Word added successfully
  } catch (error) {
    console.error("Error checking/posting word:", error);
    return false;
  }
}
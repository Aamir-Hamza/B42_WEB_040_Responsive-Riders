import { useState } from "react";
import { generateContent } from "./geminie/generateContent";

const MCQGenerator = () => {
  const [response, setResponse] = useState(null);
  const [promptText, setPromptText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMCQ = async () => {
    setLoading(true);
    try {
      const prompt = `Generate exact 10 multiple choice questions in JSON format for the following subject/topic. Each question should have 4 options and indicate the correct answer. Return ONLY the JSON without backticks or language specifiers.
      Example format:
      {
        "questions": [
          {
            "question": "What is 2+2?",
            "options": ["3", "4", "5", "6"],
            "correct_answer": "4"
          }
        ]
      }
      Generate questions for: ${promptText}`;

      const result = await generateContent(prompt);
      setResponse(JSON.parse(result));
    } catch (error) {
      setResponse("Failed to generate questions. Please try again.");
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">MCQ Generator</h1>
      <div className="w-full mb-2 max-w-sm min-w-[200px]">
        <input 
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Enter subject/topic..."
          onChange={(e) => setPromptText(e.target.value)}
          value={promptText}
        />
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={fetchMCQ}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>

      {response && (
        <div className="mt-4 space-y-4">
          {response.questions?.map((q, i) => (
            <div key={i} className="p-4 bg-gray-100 border border-gray-300 rounded">
              <p className="font-semibold mb-2">{i + 1}. {q.question}</p>
              <div className="space-y-2">
                {q.options.map((option, j) => (
                  <div 
                    key={j}
                    className={`p-2 rounded ${
                      option === q.correct_answer 
                        ? 'bg-green-100 border border-green-300' 
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MCQGenerator;
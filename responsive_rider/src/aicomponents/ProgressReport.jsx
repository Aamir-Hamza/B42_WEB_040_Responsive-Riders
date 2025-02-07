/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import { generateContent } from "../aicomponents/geminie/generateContent";

const ProgressReport = ({ studentId }) => {
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_STUDENT_API);
        if (!response.ok) throw new Error("Failed to fetch student data");

        const data = await response.json();
        const studentData = data[studentId]; // Extract data for the specific student
        
        if (!studentData) {
          throw new Error("Student data not found");
        }

        // Generate AI-based progress report
        const prompt = `Analyze the student's past performance and generate a progress report with areas of improvement: ${JSON.stringify(studentData)}. The report should be structured in JSON format suitable for rendering the following HTML structure. The JSON should be an object where each key is a section title (e.g., "Strengths", "Areas for Improvement", "Overall Progress") and the value for each key is an array of strings representing the points for that section. Return ONLY the JSON without backticks or language specifiers.`;
        
        const aiResponse = await generateContent(prompt);
        setReport(JSON.parse(aiResponse));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchData();
    }
  }, [studentId]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">📊 Student Progress Report</h2>

      {loading ? (
        <div className="space-y-4">
          <Skeleton height={30} width="100%" borderRadius={8} />
          <Skeleton height={20} width="80%" borderRadius={8} />
          <Skeleton height={20} width="90%" borderRadius={8} />
          <Skeleton height={20} width="85%" borderRadius={8} />
        </div>
      ) : report ? (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Object.entries(report).map(([title, points], index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {points.map((point, idx) => (
                  <li key={idx} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      ) : (
        <p className="text-gray-600">No progress data available. Keep engaging with quizzes to get insights!</p>
      )}
    </div>
  );
};

export default ProgressReport;

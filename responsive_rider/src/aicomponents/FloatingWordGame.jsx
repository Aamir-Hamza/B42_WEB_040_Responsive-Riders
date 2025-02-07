/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fetchUniqueWord } from "../aicomponents/wordfetch/fetchWords";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const CustomButton = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
    >
        {children}
    </button>
);

const FloatingWordGame = () => {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [speed, setSpeed] = useState(0.5);
    const [content, setContent] = useState({ word: "Mystery", meaning: "???" });
    const [revealed, setRevealed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [moving, setMoving] = useState(true);

    const containerRef = useRef(null);

    useEffect(() => {
        if (!moving) return;

        const interval = setInterval(() => {
            if (containerRef.current) {
                const container = containerRef.current;
                const containerWidth = container.offsetWidth;
                const containerHeight = container.offsetHeight;
                const padding = 20;
                const movementFactor = 20; // Increased movement distance

                setPosition((prev) => {
                    let newX = prev.x + (Math.random() * movementFactor * 2 - movementFactor) * speed;
                    let newY = prev.y + (Math.random() * movementFactor * 2 - movementFactor) * speed;

                    newX = Math.max(padding, Math.min(containerWidth - 100 - padding, newX));
                    newY = Math.max(padding, Math.min(containerHeight - 100 - padding, newY));

                    return { x: newX, y: newY };
                });
            }
        }, 30);

        return () => clearInterval(interval);
    }, [speed, moving]);

    const handleBoxClick = async () => {
        setLoading(true);
        setMoving(false);
        const newContent = await fetchUniqueWord();
        setContent(newContent);
        setRevealed(true);
        setLoading(false);
    };

    const handleNext = async () => {
        setLoading(true);
        setRevealed(false);
        setPosition({ x: 100, y: 100 });
        setMoving(true);
        const newContent = await fetchUniqueWord();
        setContent(newContent);
        setLoading(false);
    };

    const handleSaveWord = async () => {
        try {
            await axios.post(`${API_URL}`, content);
            alert("Word saved successfully!");
        } catch (error) {
            console.error("Error saving word:", error);
            alert("Failed to save word.");
        }
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            <div ref={containerRef} className="relative w-4/5 h-4/5 bg-gray-800 rounded-lg overflow-hidden">
                {!revealed ? (
                    loading ? (
                        <div className="absolute flex items-center justify-center inset-0">
                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <motion.div
                            className="absolute bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                            style={{ left: position.x, top: position.y }}
                            onClick={handleBoxClick}
                            animate={{ x: position.x, y: position.y, opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            Click Me
                        </motion.div>
                    )
                ) : (
                    <motion.div
                        className="text-center p-6 bg-gray-800 rounded-lg border border-purple-500 shadow-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-purple-300">{content.word}</h2>
                        <p className="text-lg text-gray-400 mt-2">{content.meaning}</p>
                        <div className="mt-4 flex space-x-4 justify-center">
                            <CustomButton onClick={handleNext}>Next</CustomButton>
                            <CustomButton onClick={handleSaveWord}>Save</CustomButton>
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="absolute bottom-4 flex space-x-4">
                <CustomButton onClick={() => setSpeed(0.5)}>Easy</CustomButton>
                <CustomButton onClick={() => setSpeed(1)}>Medium</CustomButton>
                <CustomButton onClick={() => setSpeed(2)}>Hard</CustomButton>
            </div>
        </div>
    );
};

export default FloatingWordGame;

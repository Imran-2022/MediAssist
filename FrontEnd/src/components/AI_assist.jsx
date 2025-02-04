import React, { useState } from "react";

const AIAssist = () => {
    const [inputText, setInputText] = useState("");
    const [recommendation, setRecommendation] = useState("No recommendation yet");

    const fetchRecommendation = async () => {
        try {
            // Simulated API request (Replace with actual API call)
            const response = await fetch(`${import.meta.env.VITE_ENDPOINT}/doctor/get-recommendation`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ symptoms: inputText })
            });
            const data = await response.json();
            setRecommendation(data.recommended_specialist || "No recommendation found");
        } catch (error) {
            console.error("Error fetching recommendation:", error);
            setRecommendation("Error fetching recommendation");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[28rem] p-6 w-full max-w-2xl mx-auto">
            <p className="text-lg font-semibold mb-4">Welcome to our AI Assist App!</p>
            
            <textarea 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
                placeholder="Enter symptoms..." 
                className="border p-3 rounded w-full h-32 mb-4 outline-none text-sm"
            />
            
            <button onClick={fetchRecommendation} className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full">Get Recommendation</button>
            
            <div className="border p-4 rounded w-full bg-gray-100 mt-4">
                <strong>Doctor's Recommendation:</strong>
                <p className="mt-2">{recommendation}</p>
            </div>
        </div>
    );
};

export default AIAssist;

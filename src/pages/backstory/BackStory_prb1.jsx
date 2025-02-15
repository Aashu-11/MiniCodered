import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/levels/Level_1.jpg";

const BackStory_prb1 = () => {
    const [text, setText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const navigate = useNavigate();

    // Replace all newline characters with spaces
    const sourceText = `  The elder keeper has handed you with a copy of Sangam, on the first page, this text is scribbled: “Keepers protected their might in the temple of the great Raja Rajeshwar"`;
    const typingSpeed = 3;

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < sourceText.length) {
                // Append the next character if it exists
                setText((prev) => prev + (sourceText[index] || ""));
                index++;
            } else {
                clearInterval(interval);
                setIsTypingComplete(true);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center flex-col h-screen relative">
            {/* Background Image */}
            <img
                src={background}
                alt="Background"
                className="object-cover w-full h-full absolute z-0"
            />
            {/* Text Container */}
            <div className="relative bg-black bg-opacity-70 p-6 rounded-lg w-11/12 sm:w-2/3 lg:w-1/2 z-10 h-auto sm:h-[50%] text-white border-2 border-white">
                <h1 className="text-lg sm:text-2xl tracking-wide">
                    {text}
                    {!isTypingComplete && <span className="animate-pulse">|</span>}
                </h1>
                {isTypingComplete && (
                    <button
                        onClick={() => navigate("/level_1")}
                        className="mt-4 sm:mt-0 sm:absolute sm:bottom-[-4rem] sm:right-0 px-4 py-2 sm:px-6 sm:py-3 bg-black bg-opacity-70 text-lg sm:text-2xl tracking-wide rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 border-2 border-white"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default BackStory_prb1;

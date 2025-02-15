import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/levels/Level_2.jpg";

const Level_2 = () => {
    const [userInput, setUserInput] = useState("");
    const [resultMessage, setResultMessage] = useState("");
    const [displayedText, setDisplayedText] = useState("");

    const correctTranslations = ["nineteen sixty eight"]; 

    const navigate = useNavigate();

    const handleVerify = () => {
        if (correctTranslations.includes(userInput.trim().toLowerCase())) { 
            setResultMessage("Correct! Well done!");
            setTimeout(() => {
                navigate("/final"); 
            }, 1500);
        } else {
            setResultMessage("Incorrect. Try again!");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleVerify();
        }
    };

    return (
        <div className="flex justify-center items-center flex-col h-screen relative">
            <div className="absolute top-8 flex justify-center w-full z-20">
                <div className="w-52 h-14 flex justify-center items-center rounded-full border border-white text-white text-3xl bg-white bg-opacity-20 backdrop-blur-md">
                    LEVEL 2
                </div>
            </div>
            <div className="absolute bottom-8 flex justify-center w-full z-20">
                <div className="w-52 h-14 flex justify-center items-center rounded-full border border-white text-white text-3xl bg-white bg-opacity-20 backdrop-blur-md">
                    PRATAPRAO
                </div>
            </div>
            <img
                src={background}
                alt="Background"
                className="object-cover w-full h-full absolute z-0"
            />
            <div className="bg-black bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-8 w-11/12 sm:w-2/3 lg:w-1/2 text-white text-center">
                <h1 className="text-2xl font-bold mb-8">{displayedText}</h1> {/* Increased margin-bottom */}
                <h2 className="text-xl mb-4">Enter Your Answer Here</h2>
                <input
                    type="text"
                    id="morseInput"
                    placeholder="Enter Your Answer Here"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="w-full px-4 py-2 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:border-white focus:ring focus:ring-white sm:text-base text-sm"
                />
                <button
                    id="verifyButton"
                    onClick={handleVerify}
                    className="mt-4 px-6 py-2 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-md sm:text-base text-sm"
                >
                    Verify
                </button>
                <p id="resultMessage" className="mt-4 text-lg font-medium sm:text-base text-sm">
                    {resultMessage}
                </p>
            </div>
        </div>
    );
};

export default Level_2;
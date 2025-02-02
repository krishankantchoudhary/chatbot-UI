import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatbotSetup = () => {
  const [training, setTraining] = useState(false);
  const [trained, setTrained] = useState(false);
  const navigate=useNavigate();

  const trainChatbot = () => {
    setTraining(true);
    setTimeout(() => {
      setTraining(false);
      setTrained(true);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]">
       <div className="bg-white p-8 lg:rounded-lg shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Chatbot Training</h2>

      {!trained ? (
        <button
          onClick={trainChatbot}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          disabled={training}
        >
          {training ? "Training..." : "Train Chatbot"}
        </button>
      ) : (
        <div>
          <p className="text-green-600 font-medium">
            ✅ Chatbot has been trained successfully!
          </p>
          {/* Show the "Next" button only after the chatbot is trained */}
          <button
            onClick={() => navigate('/chatbotintegration')}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
    </div>
   
  );
};

export default ChatbotSetup;

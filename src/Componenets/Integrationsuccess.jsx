import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const IntegrationSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti animation on success screen load
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50">
      <div className="bg-white p-8 lg:rounded-lg shadow-md w-full max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-4">
          🎉 Chatbot Integrated Successfully!
        </h2>
        <p className="text-gray-800 mb-6">
          Your chatbot is now live. You can explore the admin panel or start
          talking to your chatbot.
        </p>

        {/* Buttons for Next Actions */}
        <div className="space-y-4 lg:space-x-4">
          <button
            onClick={() => navigate("/Adminpanel")}
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            Explore Admin Panel
          </button>

          <button
            onClick={() => navigate("/Chatbot")}
            className="bg-green-500 text-white px-6 py-2 rounded-md"
          >
            Start Talking to Your Chatbot
          </button>
        </div>

        {/* Social Media Sharing */}
        <div className="mt-6">
          <p className="text-gray-800">Share your success:</p>
          <div className="flex lg:flex-row flex-col justify-center gap-4 mt-2">
            <a
              href="https://twitter.com/intent/tweet?text=Just+integrated+my+chatbot!+🚀"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white px-4 py-2 rounded-md"
            >
              Tweet
            </a>

            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourchatbot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Share on LinkedIn
            </a>

            <a
              href="https://wa.me/?text=Just+integrated+my+chatbot!+🚀"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSuccess;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const ChatbotIntegration = () => {
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Simulating Integration Check
  const handleTestIntegration = () => {
    setIsLoading(true);
    setTimeout(() => {
      const isIntegrated = Math.random() > 0.5; // Random Success or Failure

      if (isIntegrated) {
        setIntegrationStatus("success");
        triggerConfetti();
      } else {
        setIntegrationStatus("error");
      }
      setIsLoading(false);
    }, 2000);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const openClientWebsite = () => {
    const companyURL = localStorage.getItem("companyURL");
    const newWindow = window.open(
      companyURL,
      "_blank",
      "noopener,noreferrer,width=800,height=600"
    );
  };

  const sendInstructionsByEmail = () => {
    if (!email) {
      alert("Please enter an email!");
      return;
    }

    // Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Simulate email sending
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]">
      <div className="bg-white p-8 lg:rounded-lg shadow-md w-full max-w-xl mx-auto">
        {/* Top Bar with Feedback Option */}
        <div className="bg-yellow-100 text-yellow-800 p-2 rounded-md mb-4  lg:w-130 mx-auto">
          ⚠ Chatbot not working as intended?{" "}
          <a href="/feedback" className="text-blue-500 underline">
            Share feedback
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          🎯 Chatbot Integration & Testing
        </h2>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={openClientWebsite}
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            Test Chatbot
          </button>

          <button
            onClick={() => setShowInstructions((prev) => !prev)}
            className="bg-green-500 text-white px-6 py-2 rounded-md"
          >
            {showInstructions
              ? "Hide Instructions"
              : "Integrate on Your Website"}
          </button>
        </div>

        {/* Integration Instructions */}
        {showInstructions && (
          <div className="bg-gray-100 p-4 rounded-md text-left">
            <h3 className="text-lg font-semibold mb-2">
              📌 Integration Steps:
            </h3>
            <p>
              Copy and paste the following code inside the{" "}
              <code>&lt;head&gt;</code> tag of your website:
            </p>
            <pre className="bg-white p-3 rounded-md text-sm overflow-auto border">
              &lt;script
              src="https://chatbot.example.com/integration.js"&gt;&lt;/script&gt;
            </pre>

            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter developer's email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded-md w-full"
              />
              <button
                onClick={sendInstructionsByEmail}
                className="bg-purple-500 text-white px-4 py-2 rounded-md mt-4 w-full"
              >
                📩 Send Instructions to Developer
              </button>
              {emailSent && (
                <p className="text-green-600 mt-2">
                  ✅ Instructions sent successfully!
                </p>
              )}
            </div>
          </div>
        )}

        {/* Test Integration */}
        <div className="flex justify-center">
          <button
            onClick={handleTestIntegration}
            className="bg-purple-500 text-white px-6 py-2 rounded-md mt-4"
          >
            {isLoading ? "Checking..." : "Test Integration"}
          </button>
        </div>

        {/* Success Message */}
        {integrationStatus === "success" && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            🎉 Chatbot Integrated Successfully!
            <button
              onClick={() => navigate("/Integrationsuccess")}
              className="block bg-green-600 text-white px-4 py-2 rounded-md mt-4 mx-auto"
            >
              Go to Success Page
            </button>
          </div>
        )}

        {/* Error Message */}
        {integrationStatus === "error" && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            ❌ Integration Not Detected. Please check your setup!
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotIntegration;

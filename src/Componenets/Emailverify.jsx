import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerify = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  // Function to handle verification
  const handleVerify = (e) => {
    e.preventDefault();
    if (verificationCode === "123456") {
      // Example: hardcoded verification code
      setIsVerified(true);
    } else {
      alert("Invalid code, please try again!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Email Verification
        </h2>

        {!isVerified ? (
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Verification Code(use default code:123456)
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <button
              onClick={() => navigate("/organization")}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Verify Code
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-500 text-lg font-medium">
              Your email has been successfully verified!
            </p>
            <button
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => window.location.reload()}
            >
              Proceed to Setup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerify;

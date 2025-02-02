import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // State for storing form data
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", formData);
    // You would typically send this data to a backend API
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={() => navigate("/signup")}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="h-px w-1/4 bg-gray-300"></div>
          <p className="mx-2 text-sm text-gray-500">OR</p>
          <div className="h-px w-1/4 bg-gray-300"></div>
        </div>

        {/* Continue with Google Button */}
        <button
          onClick={() => navigate("/organization")}
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;

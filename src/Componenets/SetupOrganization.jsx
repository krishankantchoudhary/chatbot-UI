import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetupOrganization = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [companyDesc, setCompanyDesc] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const Next = () => {
    if (!companyName || !companyURL || !companyDesc) {
      alert("Please fill in all fields");
      return;
    }

    localStorage.setItem("companyURL", companyURL);

    // Navigate to the scraped webpages page with entered data
    navigate("/scrapedwebpage", {
      state: { companyName, companyURL, companyDesc },
    });
  };

  // Function to fetch meta description (Dummy Implementation)
  const fetchMetaDescription = () => {
    setMetaDescription("This is a sample meta description from the website.");
    setCompanyDesc("This is a sample meta description from the website.");
  };

  return (
    <div className=" flex justify-center items-center min-h-screen bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]">
      <div className="bg-white p-8 lg:rounded-lg shadow-md w-full max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Setup Organization
        </h2>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">
            Company Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter your company name"
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Company Website URL */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">
            Company Website URL
          </label>
          <input
            type="text"
            value={companyURL}
            onChange={(e) => setCompanyURL(e.target.value)}
            placeholder="https://example.com"
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fetch Meta Description Button */}
        <div className="mb-4">
          <button
            onClick={fetchMetaDescription}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Fetch Meta Description
          </button>
        </div>

        {/* Company Description */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">
            Company Description
          </label>
          <textarea
            value={companyDesc}
            onChange={(e) => setCompanyDesc(e.target.value)}
            placeholder="Enter company description"
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
        </div>

        {/* Next Button */}
        <button
          onClick={Next}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SetupOrganization;

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrapedWebpages() {
  const location = useLocation();
  const navigate = useNavigate();
  const { companyName, companyURL } = location.state || {};

  const [scrapedPages, setScrapedPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [scrapedData, setScrapedData] = useState([]);

  const { state } = useLocation();
  console.log(state); // Contains companyName, companyURL, companyDesc

  useEffect(() => {
    // Dummy Scraped Webpages Data
    setScrapedPages([
      { url: `${companyURL}/home`, status: "Scraped" },
      { url: `${companyURL}/about`, status: "Pending" },
      { url: `${companyURL}/contact`, status: "Scraped" },
    ]);
  }, [companyURL]);

  // Dummy function to fetch data chunks when a page is clicked
  const handlePageClick = (page) => {
    if (selectedPage === page.url) {
      setSelectedPage(null);
      setScrapedData([]);
    } else {
      setSelectedPage(page.url);
      setScrapedData([
        "Header: Welcome to our website",
        "Paragraph: We offer amazing services",
        "Footer: Contact us at info@example.com",
      ]);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]">
      <div className="bg-white p-8 lg:rounded-lg shadow-md w-full max-w-xl mx-auto">
        <h1 className="text-2xl  font-semibold text-gray-700 mb-4">
          Scraped Webpages for {companyName}
        </h1>

        <ul className="mt-2">
          {scrapedPages.map((page, index) => (
            <li
              key={index}
              onClick={() => handlePageClick(page)}
              className="p-2 border-b cursor-pointer hover:bg-gray-100"
            >
              <span className="font-semibold">{page.url}</span> - {page.status}
              {selectedPage === page.url && (
                <ul className="mt-2 bg-gray-100 p-2 rounded-lg">
                  {scrapedData.map((chunk, idx) => (
                    <li key={idx} className="p-1 border-b last:border-none">
                      {chunk}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Button to Move to Chatbot Setup */}
        <button
          onClick={() => navigate("/chatbotsetup")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition mt-6"
        >
          Next: Setup Chatbot
        </button>
      </div>
    </div>
  );
}

export default ScrapedWebpages;

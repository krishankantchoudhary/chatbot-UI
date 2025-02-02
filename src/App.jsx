import { NavLink, Route, Routes } from "react-router-dom";
import ChatbotIntegration from "./Componenets/ChatbotIntegration";
import EmailVerify from "./Componenets/Emailverify";
import Register from "./Componenets/Register";
import SetupOrganization from "./Componenets/SetupOrganization";
import ScrapedWebpages from "./Componenets/Scrapedwebpage";
import ChatbotSetup from "./Componenets/Chatbotsetup";
import IntegrationSuccess from "./Componenets/Integrationsuccess";
import AdminPanel from "./Componenets/Adminpanel";
import Chatbot from "./Componenets/Chatbot";
import { FaHome } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <NavLink className={"px-3 text-[16px]"} to="/">
        Home
      </NavLink>

      <Routes>
        <Route path="/" element={<Register></Register>}></Route>
        <Route path="/signup" element={<EmailVerify></EmailVerify>}></Route>
        <Route
          path="/organization"
          element={<SetupOrganization></SetupOrganization>}
        ></Route>
        <Route
          path="/chatbotintegration"
          element={<ChatbotIntegration></ChatbotIntegration>}
        ></Route>
        <Route
          path="/scrapedwebpage"
          element={<ScrapedWebpages></ScrapedWebpages>}
        ></Route>
        <Route
          path="/chatbotsetup"
          element={<ChatbotSetup></ChatbotSetup>}
        ></Route>
        <Route
          path="/Integrationsuccess"
          element={<IntegrationSuccess></IntegrationSuccess>}
        ></Route>
        <Route path="/Adminpanel" element={<AdminPanel></AdminPanel>}></Route>
        <Route path="/Chatbot" element={<Chatbot></Chatbot>}></Route>
      </Routes>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";

import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import FeedbackModal from "./components/FeedbackModal";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 7 && hour < 21) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-slate-900 text-white"
          : "min-h-screen bg-slate-100 text-black"
      }
    >
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            {darkMode ? "☀ Денна тема" : "🌙 Нічна тема"}
          </button>
        </div>

        <Header />
        <Contacts />
        <Skills />
        <Education />
        <Portfolio />
        <Comments />
        <Footer />
        <FeedbackModal />
      </div>
    </div>
  );
}

export default App;
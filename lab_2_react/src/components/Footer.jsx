import { useEffect, useState } from "react";

function Footer() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const systemInfo = {
      browser: navigator.userAgent,
      platform: navigator.platform,
    };

    localStorage.setItem(
      "systemInfo",
      JSON.stringify(systemInfo)
    );

    setInfo(
      JSON.parse(localStorage.getItem("systemInfo"))
    );
  }, []);

  return (
    <footer className="bg-slate-800 text-white p-6 rounded-3xl mt-8 text-center">
      <p className="font-bold text-2xl">
        Дата оновлення: 2026 рік
      </p>

      {info && (
        <div className="mt-4 text-sm break-words">
          <p>
            <strong>Браузер:</strong> {info.browser}
          </p>

          <p className="mt-2">
            <strong>Платформа:</strong> {info.platform}
          </p>
        </div>
      )}
    </footer>
  );
}

export default Footer;
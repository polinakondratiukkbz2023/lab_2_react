import { useEffect, useState } from "react";

function FeedbackModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 60000); // 1 хвилина

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Зворотний зв'язок
        </h2>

        <form
          action="https://formspree.io/f/xdavzbnb"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            required
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            className="w-full border p-3 rounded-xl"
          />

          <textarea
            name="message"
            placeholder="Ваше повідомлення"
            rows="4"
            required
            className="w-full border p-3 rounded-xl"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Відправити
            </button>

            <button
              type="button"
              onClick={() => setShow(false)}
              className="bg-gray-300 px-6 py-3 rounded-xl"
            >
              Закрити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal;
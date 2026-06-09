function Contacts() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        Контактні дані
      </h2>

      <ul className="space-y-3 text-lg">
        <li>
          📧 Email:
          <a
            href="mailto:kbz.2023@lpnu.ua"
            className="ml-2 text-blue-600 hover:text-blue-800 hover:underline"
          >
            kbz.2023@lpnu.ua
          </a>
        </li>

        <li>
          📱 Телефон:
          <span className="ml-2 font-medium">
            +380 12 345 67 89
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
function Portfolio() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        Портфоліо
      </h2>

      <p className="text-lg">
        Мої проєкти доступні тут:
        <a
          href="https://github.com/polinakondratiukkbz2023/lab_2_react"
          target="_blank"
          rel="noreferrer"
          className="ml-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline"
        >
          Мій репозиторій на GitHub
        </a>
      </p>
    </section>
  );
}

export default Portfolio;
function Skills() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        Технічні навички
      </h2>

      <table className="w-full border-collapse overflow-hidden rounded-xl">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 text-left">Категорія</th>
            <th className="p-3 text-left">Технології</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b hover:bg-blue-50 transition">
            <td className="p-3 font-medium">Веброзробка</td>
            <td className="p-3">HTML, CSS, JavaScript</td>
          </tr>

          <tr className="hover:bg-blue-50 transition">
            <td className="p-3 font-medium">Спеціалізовані</td>
            <td className="p-3">MATLAB, Git</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Skills;
function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 text-white rounded-3xl shadow-2xl p-10 mb-8 text-center hover:scale-105 transition duration-300">
      <h1 className="text-6xl font-black tracking-wider mb-4">
        Кондратюк Поліна
      </h1>

      <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>

      <p className="text-2xl italic text-slate-200">
        Студентка спеціальності "Кібербезпека"
      </p>
    </header>
  );
}

export default Header;
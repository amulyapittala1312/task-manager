function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-gray-800">
          TaskFlow
        </h1>

        <div className="flex gap-3 sm:gap-6 text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>

          <a href="#" className="hover:text-blue-600">
            Tasks
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
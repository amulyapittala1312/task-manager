import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          TaskFlow
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-2 sm:gap-4">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
              }`
            }
          >
            Tasks
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
              }`
            }
          >
            About
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
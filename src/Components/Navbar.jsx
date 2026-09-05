import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-gray-800">
          TaskFlow
        </h1>

        <div className="flex gap-3 sm:gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Tasks
          </NavLink>
          <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold"
      : "text-gray-600 hover:text-blue-600"
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
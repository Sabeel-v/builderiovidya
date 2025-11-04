import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ca21085baffb65ed902b74a04ec4f25bf13bc129?width=332"
            alt="Vidya Academy"
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[#093A30] font-normal text-lg">
          <Link to="/" className="hover:text-vidya-blue transition-colors">
            Home
          </Link>
          <Link to="/courses" className="hover:text-vidya-blue transition-colors">
            Courses
          </Link>
          <Link to="/about" className="hover:text-vidya-blue transition-colors">
            About
          </Link>
          <Link to="/news" className="hover:text-vidya-blue transition-colors">
            News & Events
          </Link>
          <Link to="/blog" className="hover:text-vidya-blue transition-colors">
            Blog
          </Link>
        </nav>

        <Link
          to="/contact"
          className="bg-vidya-coral text-white px-6 py-2.5 rounded-lg text-lg font-normal hover:bg-vidya-coral-dark transition-colors"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

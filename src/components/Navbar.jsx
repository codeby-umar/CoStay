import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors hover:text-white ${
      isActive ? "text-white" : "text-black"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-white" : "text-black"}`;

  return (
    <header className="fixed top-0 left-0 w-full bg-yellow-400 text-[#020202] border-b border-yellow-500 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4 lg:p-7">
        <div className="flex items-center gap-10">
          <Link className="text-3xl font-bold tracking-tighter" to="/">
            CoStay
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-medium">
            <NavLink to="/forsale" className={navLinkClass}>
              {t("navbar.forSale")}
            </NavLink>

            <NavLink to="/forrent" className={navLinkClass}>
              {t("navbar.forRent")}
            </NavLink>

            <NavLink to="/dailyrental" className={navLinkClass}>
              {t("navbar.dailyRental")}
            </NavLink>

            <NavLink to="/projects" className={navLinkClass}>
              {t("navbar.projects")}
            </NavLink>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-transparent  border-black/20 rounded-lg px-0 py-2 outline-none text-sm font-bold cursor-pointer"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <Link className="hover:underline" to="/advertise">
            {t("navbar.advertise")}
          </Link>

          <Link
            className="bg-[#020202] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-80 transition"
            to="/login"
          >
            {t("navbar.login")}
          </Link>
        </div>

        <button
          className="lg:hidden text-3xl z-[60]"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-yellow-400 transition-transform duration-300 ease-in-out lg:hidden z-[70] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4  border-yellow-500">
          <button
            className="text-3xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 px-6 py-10 text-xl font-bold">
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/forsale"
            className={mobileNavClass}
          >
            {t("navbar.forSale")}
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/forrent"
            className={mobileNavClass}
          >
            {t("navbar.forRent")}
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/dailyrental"
            className={mobileNavClass}
          >
            {t("navbar.dailyRental")}
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/projects"
            className={mobileNavClass}
          >
            {t("navbar.projects")}
          </NavLink>

          <hr className="w-1/2 border-black/10" />

          <Link onClick={() => setIsOpen(false)} to="/advertise">
            {t("navbar.advertise")}
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            className="bg-black text-white px-8 py-3 rounded-full"
            to="/login"
          >
            {t("navbar.login")}
          </Link>

          <div className="flex gap-4 mt-4">
            {["uz", "ru", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  i18n.changeLanguage(lang);
                  setIsOpen(false);
                }}
                className={`uppercase text-sm ${
                  i18n.language === lang ? "underline" : "opacity-50"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

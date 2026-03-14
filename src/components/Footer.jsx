import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineHome,
} from "react-icons/ai";
import { FaTelegramPlane, FaRegUser } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { to: "/", label: "Menyu", icon: <AiOutlineHome /> },
    { to: "/forsale", label: "Sotuv", icon: <MdOutlineMapsHomeWork /> },
    { to: "/forrent", label: "Ijara", icon: <HiOutlineBuildingOffice2 /> },
    { to: "/advertise", label: "E'lon", icon: <FaTelegramPlane /> },
    { to: "/login", label: "Kirish", icon: <FaRegUser /> },
  ];

  return (
    <>
      <footer className="hidden md:block bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-wrap items-center gap-6 lg:gap-14">
              <li>
                <Link
                  className="hover:text-yellow-400 transition"
                  to="/advertising"
                >
                  {t("footer.title")}
                </Link>
              </li>
              <li>
                <Link className="hover:text-yellow-400 transition" to="/offer">
                  {t("footer.title1")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-400 transition"
                  to="/support"
                >
                  {t("footer.title2")}
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <a
                className="h-10 w-10 rounded-full flex items-center justify-center bg-white text-black text-xl hover:bg-yellow-400 transition"
                href="/"
              >
                <FaTelegramPlane />
              </a>

              <a
                className="h-10 w-10 rounded-full flex items-center justify-center bg-white text-black text-xl hover:bg-yellow-400 transition"
                href="/"
              >
                <AiOutlineInstagram />
              </a>

              <a
                className="h-10 w-10 rounded-full flex items-center justify-center bg-white text-black text-xl hover:bg-yellow-400 transition"
                href="/"
              >
                <AiFillYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-yellow-400 py-3 text-black">
          <div className="container mx-auto px-4 text-sm flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>{t("footer.description")}</p>
            <p>{t("footer.save")}</p>
          </div>
        </div>
      </footer>
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-100 pb-safe z-50">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-0.5 transition-all duration-200 ${
                  isActive
                    ? "text-black scale-105"
                    : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-[10px] font-medium uppercase tracking-tight">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Footer;

import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineHome,
} from "react-icons/ai";
import { FaTelegramPlane, FaRegUser } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

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
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-5 items-center text-center py-2">
          <Link
            to="/"
            className="flex flex-col items-center justify-center gap-1 text-[11px] text-gray-700 hover:text-yellow-500 transition"
          >
            <AiOutlineHome className="text-xl" />
            <span>Menyu</span>
          </Link>

          <Link
            to="/forsale"
            className="flex flex-col items-center justify-center gap-1 text-[11px] text-gray-700 hover:text-yellow-500 transition"
          >
            <MdOutlineMapsHomeWork className="text-xl" />
            <span>Sotuv</span>
          </Link>

          <Link
            to="/forrent"
            className="flex flex-col items-center justify-center gap-1 text-[11px] text-gray-700 hover:text-yellow-500 transition"
          >
            <HiOutlineBuildingOffice2 className="text-xl" />
            <span>Ijara</span>
          </Link>

          <Link
            to="/advertise"
            className="flex flex-col items-center justify-center gap-1 text-[11px] text-gray-700 hover:text-yellow-500 transition"
          >
            <FaTelegramPlane className="text-xl" />
            <span>E'lon</span>
          </Link>

          <Link
            to="/login"
            className="flex flex-col items-center justify-center gap-1 text-[11px] text-gray-700 hover:text-yellow-500 transition"
          >
            <FaRegUser className="text-xl" />
            <span>Kirish</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;

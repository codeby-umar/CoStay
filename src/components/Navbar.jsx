import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <header className="flex items-center justify-between p-5">
      <ul className="flex items-center gap-8">
        <a href="/">CoStay</a>
        <Link to="/">{t("navbar.forSale")}</Link>
        <Link to="/">{t("navbar.forRent")}</Link>
        <Link to="/">{t("navbar.dailyRental")}</Link>
        <Link to="/">{t("navbar.projects")}</Link>
      </ul>

      <div className="flex items-center gap-4">
        <button>{t("navbar.advertise")}</button>
        <Link to="/login">{t("navbar.login")}</Link>

        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="outline-none text-sm p-1 border rounded-md"
        >
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>
    </header>
  );
}

export default Navbar;

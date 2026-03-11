import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("about")}</p>

      <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
      <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
}

export default Home;

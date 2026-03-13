import { useTranslation } from "react-i18next";

function Home() {
  const { t} = useTranslation();
  return (
    <div className="h-screen  flex items-center justify-center">
      <div>
         <h1>{t("home.title")}</h1>
      <p>{t("home.description")}</p>
      </div>
    </div>
  );
}

export default Home;

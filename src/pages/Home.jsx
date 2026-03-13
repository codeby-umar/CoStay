import { useTranslation } from "react-i18next";

function Home() {
  const { t} = useTranslation();
  return (
    <div className="h-screen container">
      <div>
          Home
      </div>
    </div>
  );
}

export default Home;

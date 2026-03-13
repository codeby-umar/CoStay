import { useState } from "react";
import uy from "../assets/uy2.jpg";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

function Login() {
  const [phone, setPhone] = useState("");
  const {t} = useTranslation()

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-wrap bg-gray-50">
      <div className="w-full md:w-1/2 h-64 md:h-screen hidden md:block">
        <img className="h-full w-full object-cover" src={uy} alt="uy" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 py-10">
        <div className="w-full max-w-md  md:bg-transparent  p-5  md:shadow-none">
          <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">{t("login.enter")}</h1>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t("login.phone_label")}
              type="tel"
              required
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998"
              InputProps={{
                style: { borderRadius: "16px" }
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fff",
                  "& fieldset": { borderColor: "#e5e7eb" },
                  "&:hover fieldset": { borderColor: "#111827" },
                },
              }}
            />

            <p className="text-center underline cursor-pointer text-sm text-gray-500 mt-2 leading-6">
              {t("login.agreement_text")}
            </p>

            <button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-black transition text-white py-4 rounded-2xl mt-6 text-base font-semibold shadow-md active:scale-[0.98]"
            >
              {t("login.next_button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
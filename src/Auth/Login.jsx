import { useState } from "react";
import uy from "../assets/uy2.jpg";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const DotGrid = ({ positionClass, reverse = false }) => {
  const dots = Array.from({ length: 8 });

  return (
    <div className={`absolute ${positionClass} grid grid-cols-4 gap-3`}>
      {dots.map((_, i) => {
        const row = Math.floor(i / 8);
        const col = i % 4;
        const delay = reverse
          ? row * 0.4 + col * 0.2
          : (2 - row) * 0.4 + (3 - col) * 0.2;

        return (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#000",
              borderRadius: "50%",
            }}
          />
        );
      })}
    </div>
  );
};

function Login() {
  const [phone, setPhone] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="min-h-screen flex overflow-hidden">
      <div className="hidden md:block md:w-1/2 h-screen">
        <img className="h-full w-full object-cover" src={uy} alt="uy" />
      </div>
      <div className="relative w-full md:w-1/2 h-screen flex items-center justify-center p-6 bg-white overflow-hidden">
        <DotGrid positionClass="top-12 right-12" reverse={false} />
        <DotGrid positionClass="bottom-12 left-12" reverse={true} />
        <div className="relative z-10 w-full  md:w-100">
          <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">
            {t("login.enter")}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                style: { borderRadius: "16px" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  "& fieldset": { borderColor: "#e5e7eb" },
                  "&:hover fieldset": { borderColor: "#111827" },
                },
              }}
            />

            <p className="text-center underline cursor-pointer text-sm text-gray-500 mt-4 leading-6">
              {t("login.agreement_text")}
            </p>

            <button
              type="submit"
              className="w-full bg-[#020202] hover:bg-black transition-all text-white py-4 rounded-2xl mt-6 text-base font-semibold shadow-lg active:scale-[0.96]"
            >
              {t("login.next_button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;

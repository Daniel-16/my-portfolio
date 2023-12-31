import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : `Hey there! I'm Daniel Oloruntoba, a web sorcerer on a mission to blend creativity with technology. With 3 years of full-stack magic—HTML, CSS, JS, React, NextJS, NodeJS, MongoDB, and Flutter—I'm crafting seamless experiences across platforms.
          
          🌐 Tech Explorer & Futurist
          
          Beyond coding, I'm an avid tech explorer diving into AI, ML, and AR. While not an expert yet, my curiosity fuels my journey toward mastering these realms.`}
      </p>
    </div>
  );
};

export default ServiceCard;

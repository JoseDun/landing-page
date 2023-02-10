import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenWidth };
};

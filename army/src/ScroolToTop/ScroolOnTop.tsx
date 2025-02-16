import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when path changes
  }, [pathname]);

  return null; // No visible UI, just a functional component
};

export default ScrollToTop;

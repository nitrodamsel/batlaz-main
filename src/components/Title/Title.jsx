import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Title() {
  const location = useLocation();

  /// change document title

  useEffect(() => {
    const path = location.pathname.replaceAll("/", " ").trim();
    document.title =
      "Batlaz" +
      (path.length !== 0
        ? " | " +
          path
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        : "");
  }, [location.pathname]);
}

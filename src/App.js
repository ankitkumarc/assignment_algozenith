import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AlgoZenithLP from "./pages/algo-zenith-l-p";
import IPhone14ProMax2 from "./pages/i-phone14-pro-max2";
import Graph from "./pages/graph";
import IPhone14ProMax1 from "./pages/i-phone14-pro-max1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-max-2":
        title = "";
        metaDescription = "";
        break;
      case "/graph":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-max-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AlgoZenithLP />} />
      <Route path="/iphone-14-pro-max-2" element={<IPhone14ProMax2 />} />
      <Route path="/graph" element={<Graph />} />
      <Route path="/iphone-14-pro-max-1" element={<IPhone14ProMax1 />} />
    </Routes>
  );
}
export default App;

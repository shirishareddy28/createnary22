import { useEffect } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { reportWebVitals } from 'web-vitals';
import App from './App'

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Guideline from "./pages/Guideline";
import Page1Mobile from "./pages/Page1Mobile";
import Page2Mobile from "./pages/Page2Mobile";
import Page1 from "./pages/Page1";

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
      case "/frame-425":
        title = "";
        metaDescription = "";
        break;
      case "/guideline":
        title = "";
        metaDescription = "";
        break;
      case "/page-1-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/page-2-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/page2":
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
      <Route path="/" element={<Frame />} />
      <Route path="/frame-425" element={<Frame1 />} />
      <Route path="/guideline" element={<Guideline />} />
      <Route path="/page-1-mobile" element={<Page1Mobile />} />
      <Route path="/page-2-mobile" element={<Page2Mobile />} />
      <Route path="/page2" element={<Page1 />} />
    </Routes>
  );
}
export default App;

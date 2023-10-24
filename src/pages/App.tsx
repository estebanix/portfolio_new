import { HomePage } from "../containers/HomePage";
import { AboutPage } from "../containers/AboutPage";
import { BlogPage } from "../containers/BlogPage";
import { Route, Routes } from "react-router";

import "../styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}

export default App;

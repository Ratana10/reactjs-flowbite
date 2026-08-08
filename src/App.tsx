import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

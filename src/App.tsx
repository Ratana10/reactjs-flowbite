import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

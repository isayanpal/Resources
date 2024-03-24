import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Web from "./components/Web";
import Design from "./components/Design";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-dev" element={<Web />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

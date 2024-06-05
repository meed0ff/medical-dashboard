import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/account/:page" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

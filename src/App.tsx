import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/account"
          element={
            <>
              <h1>Account</h1>
            </>
          }
        />
        <Route path="/account/:page" element={<Login />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

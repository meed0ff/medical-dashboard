import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { ThemeProvider } from "./components/theme-provider";
// import { Login } from "./components/Login";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* <Login/> */}
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;

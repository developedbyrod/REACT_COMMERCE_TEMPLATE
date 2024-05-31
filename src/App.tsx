import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import AuthContextProvider from "./context/Auth/AuthContext/AuthContext";
import { headerData } from "./constraints";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar {...headerData}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

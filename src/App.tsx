import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import AuthContextProvider from "./context/Auth/AuthContext/AuthContext";
import { headerData } from "./constraints";
import Header from "./components/Navbar/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Header {...headerData}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

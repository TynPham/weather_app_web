import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NotFound from "./components/notFound/NotFound";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ForgotPass from "./pages/logIn/ForgotPass";
import LogIn from "./pages/logIn/LogIn";
import UserPage from "./pages/user/UserPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;

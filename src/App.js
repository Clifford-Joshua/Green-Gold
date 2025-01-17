import Home from "./Pages/HomePage/Home";
import Login from "./Pages/Login Page/Login";
import Error from "./Pages/Error Page/Error";
import About from "./Pages/AboutUs Page/About";
import Course from "./Pages/Course Page/Course";
import SignUp from "./Pages/Sign Up Page/SignUp";
import Profile from "./Pages/Profile Page/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admission from "./Pages/Admission Page/Admission";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SharedComponent from "./Shared/Components/SharedComponent";
import ForgottenPassword from "./Pages/ForgottenPassword/ForgottenPassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedComponent />} path="/">
          <Route index element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admission" element={<Admission />} />
        </Route>

        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

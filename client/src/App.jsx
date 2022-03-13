import Monument from "./pages/Monument";
import Home from "./pages/Home";
import MonumentList from "./pages/MonumentList";
import SignupForm from "./pages/Register";
import Login from "./pages/Login";
import SuperLogin from './pages/SuperLogin'
import Cart from "./pages/Cart";
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monuments" element={<MonumentList />} />
        <Route path="/monument/:id" element={<Monument />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/superlogin" element={<SuperLogin />} />
        
      </Routes>
    </Router>
  );
};

export default App;
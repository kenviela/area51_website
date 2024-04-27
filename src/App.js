import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Appointment from "./views/Appointment/Appointment";
import Dashboard from "./views/Dashboard/Dashboard";
import Home from "./views/Home/Home";
import Inventory from "./views/Inventory/Inventory";
import Products from "./views/Inventory/Products/New";
import UpdateProducts from "./views/Inventory/UpdateProducts/UpdateProducts.jsx";
import Login from "./views/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="/new" element={<Products />} />
        <Route path="/bar" element={<SearchBar />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route
          path="/updateProducts/:productId/:operation"
          element={<UpdateProducts />}
        />
      </Routes>
    </div>
  );
}

export default App;

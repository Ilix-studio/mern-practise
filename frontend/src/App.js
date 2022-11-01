import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./features/Dashboard";
import Login from "./features/Login";
import Register from "./features/Register";

const App = () => {
  return (
    <>
      <Router>
        <div className="container"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

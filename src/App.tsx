import "./App.css";
// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Daily1 from "./Pages/Daily1/Daily1";
import NotFound from "./Pages/NotFound/NotFound";
import IPUtility from "./IPmanager/IPUtility";
import Daily2 from "./Pages/Daily2/Daily2";
import Daily3 from "./Pages/Daily3/Daily3";
import MovieLand from "./Pages/MovieLand/MovieLand";
import PizzaLand from "./Pages/PizzaLand/PizzaLand";
import BootstrapTest from "./Pages/BootstrapTest/BootstrapTest";
import AdminPanel from "./Pages/AdminPanel/index";
import LoginForm from "./Pages/AdminPanel/Components/LoginForm";
import Weather from "./Pages/Weather/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  // get ip
  IPUtility();
  const dispatch = useDispatch();
  window.addEventListener("resize", (ev) => {
    dispatch({
      type: "CHANGE_WINDOW_SIZE",
      payload: {
        width: window.outerWidth,
        height: window.outerHeight,
      },
    });
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Daily1" element={<Daily1 />} />
          <Route path="Daily2" element={<Daily2 />} />
          <Route path="/Daily3" element={<Daily3 />} />
          <Route path="/MovieLand" element={<MovieLand />} />
          <Route path="/PizzaLand" element={<PizzaLand />} />
          <Route path="BootstrapTest" element={<BootstrapTest />} />
          <Route path="/Admin" element={<AdminPanel />} />
          <Route path="/Admin/Login" element={<LoginForm />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

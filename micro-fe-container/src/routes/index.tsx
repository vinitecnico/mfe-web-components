import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { PageReact, PageAngular } from "../pages";

const RouteCustom: React.FC = () => {
  return (
    <Router>
      {/* <Header /> */}
      <ul>
        <li>
          <Link to="/">React</Link>
        </li>
        <li>
          <Link to="/angular">Angular</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" caseSensitive={false} element={<PageReact />} />
        <Route
          path="/angular"
          caseSensitive={false}
          element={<PageAngular />}
        />
      </Routes>
    </Router>
  );
};

export default RouteCustom;

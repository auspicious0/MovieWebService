import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Enjoy from "./routes/Enjoy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>hello</h1>}></Route>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/Enjoy" element={<Enjoy />} />
      </Routes>
    </Router>
  );
}

export default App;

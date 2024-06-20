import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formval from "./Form";
import DataDisplay from "./DataDisplay";

const App = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Formval setFormData={setFormData} />} />
          <Route
            path="/data-display"
            element={<DataDisplay formData={formData} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

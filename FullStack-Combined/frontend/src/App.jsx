import React, { useState } from "react";
import Register from "./components/CourseRegistrationGeneric.jsx";
import Login from "./components/Login.jsx";

const App = () => {
  const [registrationData, setRegistrationData] = useState(null);

  const handleLoginSuccess = (data) => {
    setRegistrationData(data);
  };

  if (!registrationData) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return <Register data={registrationData} />;
};

export default App;
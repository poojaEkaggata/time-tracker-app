import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import EmployeeLogin from "./EmployeeLogin";
import EmployeeHome from "./EmployeeHome";

function App() 
{
  /* const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => 
  {
    const checkLoggedInStatus = async () => 
    {
      try 
      {
        const response = await fetch('http://localhost:8081/login/checkLoggedInStatus');
        const data = await response.json();
        if (data.status === true) 
        {
          setIsLoggedIn(true);
        }
      } 
      catch (error) 
      {
        console.error('Error checking logged-in status:', error);
      }
    };
    checkLoggedInStatus();
  },[]);
  const handleLogin = () => 
  {
    setIsLoggedIn(true);
  };
  const handleLogout = () =>
  {
    setIsLoggedIn(false);
  } */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<EmployeeLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user_home" element={<EmployeeHome />} />
          <Route path="*" element={<EmployeeLogin />} />
        </Routes>
        {/* <Routes>
          <Route index path="/" element={<EmployeeLogin onLogin={handleLogin} />} />
          {isLoggedIn 
          && 
          (
            <>
              <Route path="/home" element={<Home />} onLogout={handleLogout} />
              <Route path="/user_home" element={<EmployeeHome />} onLogout={handleLogout} />
            </>
          )}
          {!isLoggedIn && <Route path="*" element={<EmployeeLogin onLogin={handleLogin} />} />}
          <Route path="*" element={<EmployeeLogin onLogin={handleLogin} />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;

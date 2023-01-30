import React, { useEffect, useContext, useState } from "react";

import Login from "./Login/Login";
import Home from "./Home/Home";
import MainHeader from "./MainHeader/MainHeader";
import GlobalContext from "./Store/GlobalContext";

function NewPro() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
  const ctx = useContext(GlobalContext);

  useEffect(() => {
    if (storedIsLoggedIn == "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    ctx.setglobalData({ email: email });
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <div>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home />}
      </div>
    </React.Fragment>
  );
}

export default NewPro;

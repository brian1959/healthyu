import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {withRouter} from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="login-button" onClick={() => logout({ returnTo:`http://google.com`})}>
      Log Out
    </button>
  );
};

export default withRouter(LogoutButton);

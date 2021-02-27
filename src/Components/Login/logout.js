import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {withRouter} from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="login-btn" onClick={() => logout({ returnTo:`http://google.com`})}>
      Log Out
    </div>
  );
};

export default withRouter(LogoutButton);

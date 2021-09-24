import { useAuth0 } from "@auth0/auth0-react";
import "./Auth.css"

export default function Auth() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <></>;
  else {
    if (!isAuthenticated) 
      return <button className="Auth" onClick={() => loginWithRedirect()}>Log In</button>;
    else return (
      <button className="Auth" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    );
  }
};

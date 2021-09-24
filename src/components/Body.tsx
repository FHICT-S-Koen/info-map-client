import { useAuth0 } from "@auth0/auth0-react";

export default function Body() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>loading ...</div>;
  else {
    if (isAuthenticated) return <div>Your logged in!</div>
    else return <div>Your logged out!</div>
  }
};

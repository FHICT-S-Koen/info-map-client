import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';

export default function App() {
  const {isAuthenticated} = useAuth0()

  if (isAuthenticated) return (
    <>
      <div>Your logged in!</div>
      <Logout />
    </>)
  else return (
    <>
      <div>Your logged out!</div>
      <Login />
    </>)
}

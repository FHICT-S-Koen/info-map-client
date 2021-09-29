import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
	const {logout} = useAuth0()
	return <button className="Auth" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
}
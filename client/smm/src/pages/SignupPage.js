import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoggedOutPage from "./LoggedOutCard.js";
import * as users_api from "../network/users_api.js";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const SignupPage = ({ setSmm }) => {

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
  
	const handleSignup = async (event) => {
		event.preventDefault();
		try {
			if (!emailRegex.test(email)) {
				console.log('Invalid email address');
				alert('Please enter a valid email address');
				return;
			}
			const user = await users_api.signup(null, email, password);
			setSmm(user);
			navigate("/");
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<LoggedOutPage>
			<Form>
				<Form.Group controlId="signupEmail">
					<Form.Label>SMM username</Form.Label>
					<Form.Control type="text" placeholder="Enter username" value={username}
						onChange={(e) => setUsername(e.target.value)} 
					/>
				</Form.Group>

				<Form.Group controlId="signupEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={email}
						onChange={(e) => setEmail(e.target.value)} 
					/>
				</Form.Group>

				<Form.Group controlId="signupPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit"
					onClick={handleSignup}
				>
					Sign Up
				</Button>

				<Link to="/login">Already have an account? Login</Link>
			</Form>
		</LoggedOutPage>
	);
};

export default SignupPage;
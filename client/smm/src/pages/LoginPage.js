import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoggedOutPage from "./LoggedOutPage";
import * as users_api from "../network/users_api.js";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const LoginPage = ({ setSmm }) => {


	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
  
	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			if (!emailRegex.test(email)) {
				console.log('Invalid email address');
				alert('Please enter a valid email address');
				return;
			}
			const user = await users_api.login(null, email, password);
			console.log(user);
			setSmm(user);
			navigate("/");
		} catch(error) {
			console.log(error);
		}
	}

  return (
	<LoggedOutPage>
		<Form>
			<Form.Group controlId="loginEmail">
				{/* controlId is for accessibility. It binds Form.Control and Label, propagating to all its children. */}
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" value={email}
					onChange={(e) => setEmail(e.target.value)} 
				/>
			</Form.Group>

			<Form.Group controlId="loginPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>

			<Button variant="primary" type="submit"
				onClick={handleLogin}
			>
				Login
			</Button>

			<Link to="/signup">Don't have an account? Sign up</Link>
		</Form>
	</LoggedOutPage>
  );
};

export default LoginPage;
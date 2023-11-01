import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoggedOutPage from "./LoggedOutPage";


const SignupPage = () => {
  return (
	<LoggedOutPage>
		<Form>
		<Form.Group controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<Form.Control type="email" placeholder="Enter email" />
		</Form.Group>

		<Form.Group controlId="formBasicPassword">
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="Password" />
		</Form.Group>

		<Button variant="primary" type="submit">
			Sign Up
		</Button>

		<Link to="/login">Already have an account? Login</Link>
		</Form>
	</LoggedOutPage>
  );
};

export default SignupPage;
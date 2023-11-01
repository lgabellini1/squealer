import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoggedOutPage from "./LoggedOutPage";


const LoginPage = ({ setSmm }) => {

  return (
	<LoggedOutPage>
		<Form>
			<Form.Group controlId="formBasicEmail">
				{/* controlId is for accessibility. It binds Form.Control and Label, propagating to all its children. */}
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>

			<Button variant="primary" type="submit">
				Login
			</Button>

			<Link to="/signup">Don't have an account? Sign up</Link>
		</Form>
	</LoggedOutPage>
  );
};

export default LoginPage;
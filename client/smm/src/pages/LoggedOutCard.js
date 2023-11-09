import { Card, Container } from "react-bootstrap";

const LoggedOutPage = ({ children }) => {

	return (
		<Container className="d-flex justify-content-center align-items-center h-100" >
			<Card className="formCard">
				<Card.Body className="d-flex flex-column">
				{children}
				</Card.Body>
			</Card>
		</Container>
	  );
};

export default LoggedOutPage;
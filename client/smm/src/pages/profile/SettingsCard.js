import { Card, Container } from "react-bootstrap";

const SettingsCard = ({ children }) => {

	return (
		<Container className="d-flex justify-content-center mt-5">
			<Card className="text-center" style={{ width: '18rem' }}>
				<Card.Body>
					{children}
				</Card.Body>
			</Card>
		</Container>
	  );
}

export default SettingsCard;
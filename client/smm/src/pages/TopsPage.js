import { Container } from "react-bootstrap";
import Tops from "../subpages/Tops";

const TopsPage = ({ vips }) => {

	return (
		<Container className="mainSubpage">
			
			<Tops id="tops" className="tops" vips={vips} />
		</Container>
	);
	
}

export default TopsPage;
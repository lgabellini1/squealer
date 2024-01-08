import Vips from '../subpages/Vips';
import { Container } from 'react-bootstrap';



function VipsPage({ vips }) {


	return (
		<Container className="mainSubpage">
			
			<Vips id="vips" className="vips" vips={vips} />
			
		</Container>
	);
}

export default VipsPage;
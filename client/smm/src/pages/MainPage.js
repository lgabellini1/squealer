import { Col, Container, Row } from 'react-bootstrap';
import Feed from '../subpages/Feed';
import Tops from '../subpages/Tops';


const MainPage = ({smm, vips}) => {

	return (
		<Container fluid id="main-container" className="mainContainer profileContainer">
			<Row>
				<Col>
					<Feed id="feed" className="feed mainSubpage" vips={vips}/>
				</Col>
				<Col>
					<Tops id="tops" className="tops mainSubpage" vips={vips} />
				</Col>
			</Row>
		</Container>
	);
	
}

export default MainPage;
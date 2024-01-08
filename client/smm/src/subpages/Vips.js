import { Text } from 'react-native';
import { Container, Row, Col } from 'react-bootstrap';
import Vip from '../components/Vip';

function Vips({ vips }) {

    const impersonateVip = (vip) => {
        // Store VIP data for impersonation
        localStorage.setItem('impersonateVip', JSON.stringify(vip));
        // Redirect to Vue app
        window.location.href = 'url_to_vue_app';
    };

	/* STYLING */
	// alternate greys for rows
	const rowStyleAlternated = (index) => ({
        backgroundColor: index % 2 === 0 ? '#E0E0E0' : '#ADADAD', // light gray for even rows, white for odd rows
    });

    return (
		<div className='d-flex flex-column'>

			<h2 className="text-center font-weight-bold">
				YOUR VIPS
			</h2>

			<Container fluid className="d-flex flex-column p-4">
				<Row>
					<Col className='col-3'>
						<strong>Username</strong>
					</Col>
					<Col className='col-6 text-center'>
						<Row>
							<strong>Remaining Chars [USED / TOT]</strong>
						</Row>
						<Row>
							<Col className='col-4'>Day</Col>
							<Col className='col-4'>Week</Col>
							<Col className='col-4'>Month</Col>
						</Row>
					</Col>
					<Col className='col-3'>
						<strong>Action</strong>
					</Col>
				</Row>
				{
					vips.map((vip, index) => (
						<Vip
							key={index}
							style={rowStyleAlternated(index)}
							vip={vip}
							impersonateVip={impersonateVip}
						/>
					))
				}
			</Container>

		</div>
    );
}

export default Vips;
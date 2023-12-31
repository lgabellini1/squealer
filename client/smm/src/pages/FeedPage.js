import { useEffect, useState } from "react";
import { Button, Col, Collapse, Container, Form, Row } from "react-bootstrap";
import Feed from "../subpages/Feed";

const FeedPage = ({ vips }) => {

	const [ open, setOpen ] = useState(false);
	const [ checked, setChecked ] = useState([]);
	const [ selectedVips, setSelectedVips ] = useState([]);
  
	const handleCheckboxChange = (index) => (event) => {
		const newChecked = [...checked];
		newChecked[index] = event.target.checked;
		setChecked(newChecked);
		setSelectedVips(
			vips.filter( (vip, index) => newChecked[index] )
		);
	};

	useEffect(() => {
		async function initChecked() {
			if(vips) {
				setChecked(Array(vips.length).fill(true));
				setSelectedVips(vips);
			} else {
				setChecked([]);
				setSelectedVips([]);
			}
		}
		initChecked();
	}, [vips]);
  

	return (
		<Container className="mainContainer">
			<Row>
				<Col xs={2}>
					<Button
						className="m-2"
						onClick={() => setOpen(!open)}
						aria-controls="collapse-choose-vips"
						aria-expanded={open}
						>
						FILTER VIPS
					</Button>
					<Collapse in={open}>
						<div id="collapse-choose-vips">
							{ vips && vips.map( (vip, index) => (
								<Form.Check 
								key={index}
									type="checkbox"
									label={vip}
									checked={checked[index]}
									onChange={handleCheckboxChange(index)}
								/>
							)) }
						</div>
					</Collapse>
				</Col>

				<Col>
					<Feed id="feed" className="feed mainSubpage" vips={selectedVips} />
				</Col>	
			</Row>
		</Container>
	);
	
}

export default FeedPage;
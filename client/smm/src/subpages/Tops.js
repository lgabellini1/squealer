import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Top from "../components/Top";
import "../styles/App.css";

const Tops = ({ id, className }) => {
	
		const TOPS_INIT = [
			{
				n: 5,
				users: null,
				sort_key: "impression"
			},
			{
				n: 5,
				users: null,
				sort_key: "positive"
			},
			{
				n: 5,
				users: ["Amy"],
				sort_key: "negative"
			}
		];

	const [ topsNumber, setTopsNumber ] = useState(0);

	useEffect(() => {
		async function loadTopsNumber() {
			try {
				const topsNumber = TOPS_INIT.length;
				setTopsNumber(topsNumber);
			} catch(error) {
				console.log(error);
			}
		}
		loadTopsNumber();
	}, [TOPS_INIT.length]);

	const topsGrid =
		<Container fluid id={id} className={`d-flex flex-column gap-5 p-4 ${className}`}>
			{
				TOPS_INIT.slice(0, topsNumber).map( (top, index) => (
					<div key={index}>
						<Top n={top.n} users={top.users} sort_key={top.sort_key} />
					</div>
				))
			}
		</Container>

	
	return (
		<>
			{ topsGrid }
		</>
	);
};

export default Tops;
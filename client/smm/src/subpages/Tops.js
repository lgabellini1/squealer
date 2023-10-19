import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Top from "../components/Top";

const Tops = () => {
	
		const TOPS_INIT = [
			{
				n: 3,
				users: null,
				sort_key: "impression"
			},
			{
				n: 3,
				users: null,
				sort_key: "positive"
			},
			{
				n: 3,
				users: null,
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
		<div className="d-flex flex-column">
			{
				TOPS_INIT.slice(0, topsNumber).map( (top, index) => (
					<div key={index}>
						<Top n={top.n} users={top.users} sort_key={top.sort_key} />
					</div>
				))
			}
		</div>

	
	return (
		<>
			{ topsGrid }
		</>
	);
};

export default Tops;
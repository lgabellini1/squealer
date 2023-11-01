import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Top from "../components/Top";
import "../styles/App.css";
import { deepCopy } from "../utils/objects.js";


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
		users: null,
		sort_key: "negative"
	}
];

const Tops = ({ id, className, vips }) => {
	
	const [ tops, setTops ] = useState([]);

	useEffect(() => {
		async function loadTops() {
			setTops(
				// deep copy to avoid to avoid calling useEffect in loop
				deepCopy(TOPS_INIT).map( top => (
					{
						...top,
						users: vips
					}
				)));
		}
		loadTops();
	}, [vips]);

	const topsGrid =
		<Container fluid id={id} className={`d-flex flex-column gap-5 p-4 ${className}`}>
			{
				tops.map( (top, index) => (
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
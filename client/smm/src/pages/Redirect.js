import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Redirect = ({ to }) => {

	const navigate = useNavigate();

	useEffect(() => {
		navigate(to);
	}, [navigate, to]);

	return (
		<div>
			<h1>Redirecting...</h1>
		</div>
	);
};

export default Redirect;
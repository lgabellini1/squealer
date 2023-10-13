import { Text } from "react-native";



const Reaction = ({ Icon, text }) => {
	
	const TEXT_WIDTH_N	= 3;
	const TEXT_WIDTH	= TEXT_WIDTH_N + "rem";
	const MAX_HEIGHT_N	= 1.2;

	const FONT_SIZE_FORMULA	= parseFloat(TEXT_WIDTH_N / text.toString().length);
	const FONT_SIZE			= ( text.toString().length < TEXT_WIDTH_N ? 
		MAX_HEIGHT_N : Math.min( MAX_HEIGHT_N, FONT_SIZE_FORMULA )
		) + "rem";

	return (
		<div class="h-100 d-flex align-items-center">
			<Icon style={{width:"2rem"}}/>
			<span className="d-inline-block" style={{width:TEXT_WIDTH, fontSize:FONT_SIZE }}>{ text }</span>
		</div>
	);
};

export default Reaction;
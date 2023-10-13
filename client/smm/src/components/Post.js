import { Card, Col, Row } from "react-bootstrap";
import { Text } from "react-native";
import styles from "../styles/Post.module.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Reaction from "./Reaction";


const POST_FIELDS = ["id", "title", "text", "sender", "receiver", "date", "impression", "positive", "negative"];
/* positive and negative (reactions) are fetched already calculated with CM.
*/

const REACTION_ICONS = [
	[VisibilityIcon, "impression"],
	[SentimentVerySatisfiedIcon, "positive"],
	[SentimentVeryDissatisfiedIcon, "negative"]
];



const Post = ({ post }) => {

	const {
		id,
		receiver,
		sender,
		text,
		title,
		date,
		impression,
		positive,
		negative
	} = post;

	const reactionsGrid = 	
		<div className="d-flex">
			<Row style={{}}>
			{
				REACTION_ICONS.map( ([Icon, attr], index) => (
					<Col key={index} className={`p-0`} style={{width:"10%"}}>
						<Reaction Icon={Icon} text={post[attr]} />
					</Col>
				))
			}
			</Row>
		</div>


	return (
		<Card className="">
			<Card.Header className="" style={{padding:".3rem 1rem 0"}}>
				<div className="d-flex justify-content-between">
					<Text className="">{ sender }</Text>
					<Text className=""><span className={styles.textSecondary}>to: </span>{ receiver }</Text>
				</div>
				<div className="d-flex">
					<span className={styles.textSecondary}>{ date }</span>
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title> { title } </Card.Title>
				<Card.Text> { text } </Card.Text>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-between" style={{padding:"0.2rem 1rem"}}>
				{ reactionsGrid }
				<div className="d-flex">
					OTHER TO ADD, BUTTONS
				</div>
			</Card.Footer>
		</Card>
	);
}

export default Post;
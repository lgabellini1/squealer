import { Card } from "react-bootstrap";

const POST_FIELDS = ["id", "title", "text", "sender", "receiver", "date", "impression", "positive", "negative"];
/* positive and negative (reactions) are fetched already calculated with CM.
*/

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

	return (
		<Card className="">
			<Card.Header>
				{ sender }
			</Card.Header>
			<Card.Body>
				<Card.Title> { title } </Card.Title>
				<Card.Text> { text } </Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Post;
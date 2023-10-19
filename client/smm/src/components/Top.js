import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import * as posts_api from '../network/posts_api';
import { useEffect, useState } from "react";
import { REACTION_ICONS } from './Icons';
import Reaction from './Reaction';



/**
 * params are the init ones.
 */
const Top = ({ n, users, sort_key }) => {

	const [ ranking, setRanking ] = useState([]);

	useEffect(() => {
		async function loadRanking() {
			console.log(n,users,sort_key)
			try {
				const top = await posts_api.fetchTopPosts(n, users, sort_key);
				setRanking(top);
			} catch(error) {
				console.log(error);
			}
		}
		loadRanking();
	}, [n, users, sort_key]);

	console.log(n,users,sort_key);

	return (
		<ListGroup className="mb-3 mx-3">
			{
				ranking.map( (post, index) => {

					var SortKeyIcon = Object.keys(REACTION_ICONS).find( (key) => key === sort_key ) ?
						REACTION_ICONS[sort_key] : null;

					return (
						<ListGroupItem key={index} className="bg-secondary">
							<Row>
								<Col className="col-1">
									<b>{`${index + 1}.`}</b>
								</Col>
								<Col className="col-8">
										{`${post.sender} -> ${post.receiver}`}
								</Col>
								<Col className="col-3" style={{fontSize: "50%"}} >
										{`${post.date}`}
								</Col>
							</Row>
							<Row>
								<Col className="col-9">
									{`${post.title}`}
								</Col>
								<Col className="col-3">
									{
										SortKeyIcon ?
											<Reaction Icon={SortKeyIcon} text={post[sort_key]} />
											: `${sort_key} ${post[sort_key]}`
									}
								</Col>
							</Row>
						</ListGroupItem>
					);
				})
			}
		</ListGroup>
	);

}

export default Top;
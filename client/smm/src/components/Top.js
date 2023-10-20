import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import * as posts_api from '../network/posts_api';
import { Text } from 'react-native';
import { useEffect, useState } from "react";
import { REACTION_ICONS } from './Icons';
import Reaction from './Reaction';
import "../styles/Misc.css";



/**
 * params are the init ones.
 */
const Top = ({ n, users, sort_key }) => {

	const [ ranking, setRanking ] = useState([]);

	const TOP_COLORS = ["#FFD700", "#C0C0C0", "#CD7F32"];
	const DEFAULT_COLOR = "#EEEEEE";

	useEffect(() => {
		async function loadRanking() {
			try {
				const top = await posts_api.fetchTopPosts(n, users, sort_key);
				setRanking(top);
			} catch(error) {
				console.log(error);
			}
		}
		loadRanking();
	}, [n, users, sort_key]);


	return (
		<div className='d-flex flex-column'>
			<Text>
				sorted by
					<span className="uppercase" style={{fontWeight:'bold'}}>{` ${sort_key} `}</span>
					for <span style={{fontWeight:'bold'}}>{users ? users.join(", ") : "all users"}</span>
			</Text>

			<ListGroup className="p-0">
				{
					ranking.map( (post, index) => {

						var SortKeyIcon = Object.keys(REACTION_ICONS).find( (key) => key === sort_key ) ?
							REACTION_ICONS[sort_key] : null;

						return (
							<ListGroupItem key={index} style={{backgroundColor: TOP_COLORS[index] || DEFAULT_COLOR}}>
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
		</div>
	);

}

export default Top;
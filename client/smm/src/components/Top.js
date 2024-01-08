import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import * as posts_api from '../network/posts_api';
import { Text } from 'react-native';
import { useEffect, useState } from "react";
import { REACTION_ICONS } from './Icons';
import Reaction from './Reaction';
import { getUsernames } from '../models/models';
import "../styles/Misc.css";



/**
 * params are the init ones.
 */
const Top = ({ n, users, sort_key }) => {

	const [ ranking, setRanking ] = useState([]);
	const [ usernames, setUsernames ] = useState([]);	// an array for only usernames

	const TOP_COLORS = ["#FFD700", "#C0C0C0", "#CD7F32"];
	const DEFAULT_COLOR = "#EEEEEE";

	useEffect(() => {
		async function loadUsernames() {
			try {
				setUsernames(getUsernames(users));
			} catch(error) {
				console.log(error);
			}
		}
		loadUsernames();
	}, [users]);

	useEffect(() => {
		async function loadRanking() {
			try {
				const top = await posts_api.fetchTopPosts(n, usernames, sort_key);
				setRanking(top);
			} catch(error) {
				console.log(error);
			}
		}
		loadRanking();
	}, [n, usernames, sort_key]);


	return (
		<div className='d-flex flex-column'>
			<Text>
				sorted by
					<span className="uppercase" style={{fontWeight:'bold'}}>{` ${sort_key} `}</span>
					for <span style={{fontWeight:'bold'}}>{usernames ? usernames.join(", ") : "all users"}</span>
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
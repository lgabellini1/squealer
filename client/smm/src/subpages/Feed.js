import { useEffect, useState } from "react";
import * as posts_api from "../network/posts_api";
import Post from "../components/Post";
import { Container } from "react-bootstrap";

const Feed = (props) => {

	const { id } = props;

	const [ posts, setPosts] = useState([]);
	const [ postsLoading, setPostsLoading] = useState(true);

	useEffect(() => {
		async function loadPosts() {
			try {
				setPostsLoading(true);
				const posts = await posts_api.fetchPosts();
				setPosts(posts);
			} catch(error) {
				console.log(error);
			} finally {
				setPostsLoading(false);
			}
		}
		loadPosts();
	}, []);
	
	const postsGrid = 
		<Container fluid id={id} className="py-2">
			{
				posts.map( (post, index) => (
					<div key={index} className="my-2">
						<Post post={post} className="" />
					</div>
				))
			}
		</Container>

	return (
		<>
			{ (!postsLoading && postsGrid)
			|| "LOADING..." }
		</>
	);
}

export default Feed;
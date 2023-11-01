import { useEffect, useState } from "react";
import * as posts_api from "../network/posts_api";
import Post from "../components/Post";
import { Container } from "react-bootstrap";
import '../styles/App.css';


const Feed = ({ id, className, vips }) => {

	const [ posts, setPosts ] = useState([]);
	const [ postsLoading, setPostsLoading ] = useState(true);

	useEffect(() => {
		async function loadPosts() {
			try {
				setPostsLoading(true);
				const posts = await posts_api.fetchPosts(vips);
				setPosts(posts);
			} catch(error) {
				console.log(error);
			} finally {
				setPostsLoading(false);
			}
		}
		loadPosts();
	}, [vips]);

	const postsGrid = 
		<Container fluid id={id} className={`d-flex flex-column ${className}`}>
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
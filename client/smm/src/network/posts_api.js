import { POSTS_TEST } from "../examples/posts.js";
import { parsePost } from "../models/models.js";



/**
 * return all posts from all in `users`
 * @param {Array[String]} users usernames
 * @returns {Array[Object]}
 */
export async function fetchPosts(users) {
	
		return POSTS_TEST.filter( post => users.includes(post.sender) );

	/*
	const response = await fetch("/api/posts", { method: "GET" });
	return response.json();
	*/
}

/**
 * Return the top `n` posts of the users in `users` according to the `key` attribute.
 * @param {int} n if negative, return the worst `n`, otherwise the best `n`
 * @param {Array[String]} users usernames
 * @param {String} key 
 * @return {Array[Object]}
 */
export async function fetchTopPosts(n, users, key) {

	return POSTS_TEST.filter( post => users.includes(post.sender) )
		.sort( (a, b) => a[key] < b[key] ? n : -n )
		.slice(0, Math.abs(n));

	/*
	const response = await fetch("/api/tops", { method: "GET", body: { n, users, key } });
	return response.json();	
	*/
}


export async function createPost(post) {

	const parsed_post = parsePost(post);
	parsed_post.id = POSTS_TEST.length;
	
	POSTS_TEST.push(parsed_post);

	console.log("pushed post",POSTS_TEST);
	/*
	const response = await fetch("/api/notes", 
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	});
	return response.json();
	*/
}

export async function updatePost(post) {

	const parsed_post = parsePost(post);
	
	POSTS_TEST.map( p =>
		p.id === parsed_post.id ?
		p : parsed_post
		);
		
	console.log("edited post",parsed_post.id,POSTS_TEST);
	/*
	const response = await fetchData("/api/notes/" + noteId, 
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(note),
		});
	return response.json();
	*/
}

export async function deletePost(postId) {
	
	POSTS_TEST.filter( p => p.id !== postId );

	/*
	await fetchData("/api/notes/" + noteId, {method: "DELETE"});
	*/
}
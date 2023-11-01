import { POSTS_TEST } from "../examples/posts.js";


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
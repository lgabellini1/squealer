import { POSTS_TEST } from "../examples/posts.js";


export async function fetchPosts() {
	return POSTS_TEST;
	/*
	const response = await fetch("/api/posts", { method: "GET" });
	return response.json();
	*/
}

/**
 * Return the top `n` posts of the users in `users` according to the `key` attribute.
 * @param {int} n if negative, return the worst `n`, otherwise the best `n`
 * @param {Array[String]} users id, or none for all users
 * @param {String} key 
 * @return {Array[Object]}
 */
export async function fetchTopPosts(n, users, key) {

	return Array.from(POSTS_TEST)
		.filter( post => !users || users.includes(post.receiver) )
		.sort( (a, b) => a[key] < b[key] ? n : -n )
		.slice(0, Math.abs(n));

	/*
	const response = await fetch("/api/tops", { method: "GET", body: { n, users, key } });
	return response.json();	
	*/
}
import { POSTS_TEST } from "../examples/posts.js";


export async function fetchPosts() {
	return POSTS_TEST;
	/*
	const response = await fetch("/api/posts", { method: "GET" });
	return response.json();
	*/
}
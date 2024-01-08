import { USERS_TEST } from "../examples/users.js";



/**
 * return all vips (usernames) managed by the specified `smm`.
 * @param {String} smm 
 * @returns {Array[String]}
 */
export async function fetchVips(smm) {

	const vips_names = USERS_TEST.find( entry => entry.username === smm ).vips;
	return USERS_TEST.filter( entry => vips_names.includes(entry.username) );
}


export async function login(username, email, password) {
	
	const entry = USERS_TEST.find( entry => entry.email === email && entry.password === password );
	
	if(entry === undefined) {
		throw new Error("User doesn't exist.");
	} else if(password !== entry.password) {
		throw new Error("Wrong password.");
	}
	return USERS_TEST.find( entry => entry.email === email && entry.password === password ).username;
}


export async function signup(username, email, password) {
	
	// check if email or username are already in use
	if(USERS_TEST.find( entry => entry.email === email ) !== undefined) {
		throw new Error("Email already in use.");
	} else if(USERS_TEST.find( entry => entry.username === username ) !== undefined) {
		throw new Error("Username already in use.");
	}

	USERS_TEST.push({
		email: email,
		password: password,
		smm: username,
		vips: []
	});
}
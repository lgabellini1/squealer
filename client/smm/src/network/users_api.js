import { USERS_TEST } from "../examples/users.js";



/**
 * return all vips (usernames) managed by the specified `smm`.
 * @param {String} smm 
 * @returns {Array[String]}
 */
export async function fetchVips(smm) {

	return USERS_TEST.find( entry => entry.smm === smm ).vips;
	
}
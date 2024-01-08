
export function parsePost(obj) {

	const {
        id,
        title,
        text,
        sender,
        receiver,
        date,
        impression,
        positive,
        negative
    } = obj;

	return {
		id,
		title,
		text,
		sender,
		receiver,
		date,
		impression,
		positive,
		negative
	};
}


export const GET_USERS_CHARS = {
	DAY:	(vip) => vip.remainingCharacters[0],
	WEEK:	(vip) => vip.remainingCharacters[1],
	MONTH:	(vip) => vip.remainingCharacters[2]
};

/**
 * Get only the usernames from the users objects.
 * @param {*} users users objects
 * @returns an array of usernames
 */
export function getUsernames(users) {
	return users
		? users.map( user => user.username )
		: [];
}

export function parseUser(obj) {

	const {
		username,	// username
		isSmm,		// boolean if is smm
		email,		// email address
		password,	// password
		smm,		// social media manager, or null
		vips,		// array of managed vips for smm (can be empty)
		remainingCharacters
		/*	array of arrays - pairs for remaining characters,
			respectively for day, week, month;
			each pair contains, in order, the total characters and the used ones.
		*/
	} = obj;
	
	return {
		username,
		isSmm,
		email,
		password,
		smm,
		vips,
		remainingCharacters
	}
}
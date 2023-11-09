
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

export function parseSmm(obj) {

	const {
		smm,
		email,
		password,
		vips
	} = obj;
	
	return {
		smm,
		email,
		password,
		vips
	}
}
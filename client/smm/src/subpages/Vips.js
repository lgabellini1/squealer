import { useEffect, useState } from 'react';
import * as users_api from './network/users_api';



function Vips({ vips }) {


	const impersonateVip = (vip) => {
	// Store VIP data for impersonation
	localStorage.setItem('impersonateVip', JSON.stringify(vip));
	// Redirect to Vue app
	window.location.href = 'url_to_vue_app';
	};

	return (
	<div>
		{vips.map((vip) => (
		<div key={vip.id}>
			<p>{vip.name} - Remaining chars: {vip.remainingChars}</p>
			<button onClick={() => impersonateVip(vip)}>Impersonate</button>
		</div>
		))}
	</div>
	);
}

export default Vips;
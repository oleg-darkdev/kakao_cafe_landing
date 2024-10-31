import { json } from '@sveltejs/kit';
// import {  } from '$sharedData';
// import {  } from '$sharedUtils';




export async function GET(event) {
	return json([], {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


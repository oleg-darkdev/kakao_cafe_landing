import { json } from '@sveltejs/kit';
import { health } from '$sharedData';
import { getShortSingleBoardgameData } from '$sharedUtils';



export async function GET(event) {
	return json(getShortSingleBoardgameData(health), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	});
}


/**
 *  Action Types
 */

export const ADD_HACKATHON = 'ADD_HACKATHON';
export const REMOVE_HACKATHON = 'REMOVE_HACKATHON';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


/**
 *  Visibility Filters
 */

export const visibilityFilters = {
	MOST_RECENT: 'MOST_RECENT',
	OLDEST: 'OLDEST',
	WINS: 'WINS'
}


/**
 * Action Creators
 */

/**
 * Adds a new hackathon **Testing purposes only**
 * @param  object hackathon 	Format: {title:String, description:String, date:Date, link:String}
 * @return Object 				Returns an action object 
 */

export function addHackathon( hackathon ) {
	return { type: ADD_HACKATHON , hackathon };
}

/**
 * Removes a hackathon **Testing purposes only**
 * @param  int index 	Index of hackathon being removed
 * @return Object       Returns an action object
 */

export function removeHackathon( index ) {
	return { type: REMOVE_HACKATHON, index };
}

/**
 * Filter the hackathon using the provided filter
 * @param String filter 	The filter being used
 */
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}







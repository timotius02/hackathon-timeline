import { ADD_HACKATHON, REMOVE_HACKATHON, SET_VISIBILITY_FILTER, visibilityFilters } from './actions';
const { MOST_RECENT } = visibilityFilters;

/**
 * Handles the visibilityFilter component of main State
 * @param String state  	Current state of visibilityFilter
 * @param Object action 	Action object with filter atteched
 * @return Object 			Returns the new state of visibilityFilter
 */
export function visibilityFilter(state = MOST_RECENT, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

/**
 * Handles the hackathons component of the main State
 * @param  Array  state  	Current state of hackathon collection
 * @param  Object action 	Action object with corresponding data attached
 * @return Object       	Returns the new hackathon collection state
 */
export function hackathons(state = [], action) {
	switch (action.type) {
		case ADD_HACKATHON:
			return [...state, action.hackathon];
		case REMOVE_HACKATHON:
			return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
		default:
			return state;
	}
}
import React, { Component, PropTypes } from 'react';
import { visibilityFilters, setVisibilityFilter } from '../actions';
import { connect } from 'react-redux';
import TimelineBlock from './TimelineBlock';
import TimelineFilter from './TimelineFilter';
import { source } from '../data';

/**
 *  Timeline class Definition
 */
class Timeline extends Component {
	render() {
		// These are injected via connect(injectProps)
		const { dispatch, visibleHackathons, visibilityFilter } = this.props;
		return (
			<div>
				<header>
	        		<h1>Hackathon Timeline</h1>
	      		</header>
	      		<TimelineFilter setFilter={(newFilter) => dispatch(setVisibilityFilter(newFilter))}/>
				<section id='cd-timeline' className='cd-container'>
					{ visibleHackathons.map((data, index) => {
						return <TimelineBlock {...data} key={index} />;
					}) }
				</section>
			</div>
		)
	}
}

/**
 * Prop validation for Timeline
 */
Timeline.propTypes = {
	visibleHackathons: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		win: PropTypes.bool.isRequired
	})),
	visibilityFilter: PropTypes.oneOf(['MOST_RECENT', 'OLDEST', 'WINS']).isRequired
}
/**
 * Apply filter to hackathon collection within state before injecting into Timeline
 * @param  Array  hackathons  	state.hackathons
 * @param  String filter     	type of filter: OLDEST, WINS, MOST_RECENT
 * @return Array             	new filtered array
 */
function filterHackathons(hackathons, filter) {
	switch (filter) {
		case visibilityFilters.MOST_RECENT:
			return hackathons.slice().sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			});
		case visibilityFilters.WINS:
			return hackathons.filter((hackathon) => hackathon.win);
		default: // OLDEST or invalid
			return hackathons;
	}
}

/**
 * Modifies global state before injecting into Component
 * @param  Object  state  Current Global State
 * @return Object 		  Modified state to be injected 
 */
function injectProps(state) {
  return {
    visibleHackathons: filterHackathons(state.hackathons, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(injectProps)(Timeline);

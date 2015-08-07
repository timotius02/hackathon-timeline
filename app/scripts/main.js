import React from 'react';
import Timeline from './components/Timeline';

import { createStore, combineReducers } from 'redux';
import { visibilityFilters, addHackathon, removeHackathon, setVisibilityFilter } from './actions';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { source } from './data';

const initialState = {
	hackathons: source,
	visibilityFilter: visibilityFilters.MOST_RECENT
};

let hackathonApp = combineReducers(reducers);
let store = createStore(hackathonApp, initialState);

/**
 * 	TEST
 */
// console.log(store.getState());

let unsubscribe = store.subscribe(() => {
	console.log(store.getState());
}); 

// let testHackathon = {
// 	title: 'AT&T IoT Hackathon',
// 	description: 'Direct2Me - a web application that allows shoppers in a mall to push deals from their favorite stores to their mobile device. 1st place.',
// 	date: 'September 27 2013',
// 	link: 'http://devpost.com/software/direct2me'
// };

// store.dispatch(addHackathon(testHackathon));
// store.dispatch(addHackathon(testHackathon));
// store.dispatch(removeHackathon(1));
// store.dispatch(removeHackathon(0));
// store.dispatch(setVisibilityFilter(visibilityFilters.WINS));

React.render(
	<Provider store={store}>
    	{() => <Timeline />}
  	</Provider>, 
  	document.getElementById('main'));

jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});







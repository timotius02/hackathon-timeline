import React, { PropTypes } from 'react';


/**
 * TimelineImage class definition
 */
export default class TimelineImage extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate() {
		return false;
	}
	render() {
		// returns a random image background
		const getColor = () => {
			const _rand = Math.random();
			if (_rand < 0.33) {
				return 'cd-picture';
			}
			else if (_rand >= 0.33 && _rand < 0.66) {
				return 'cd-movie';
			}
			else 
				return 'cd-location' 
		}

		return (
	    <div className={ 'cd-timeline-img ' + getColor() }>
        	<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg' alt='Picture'/>
      	</div>
		)
	}
}

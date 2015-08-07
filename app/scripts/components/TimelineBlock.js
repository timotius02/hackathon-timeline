import React from 'react';
import TimelineImage from './TimelineImage';
import TimelineContent from './TimelineContent';

export default class TimelineBlock extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='cd-timeline-block'>
				<TimelineImage />
				<TimelineContent { ...this.props } />
			</div>
		)
	}
}
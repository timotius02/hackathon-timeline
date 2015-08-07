import React from 'react';

export default class TimelineContent extends React.Component {
	constructor(props) {
		super(props);
	}
 	render() {
		return (
			<div className='cd-timeline-content'>
        <h2>{ this.props.title }</h2>
        <p> { this.props.description }</p>
        <a href={ this.props.link } className='cd-read-more'>Read more</a>
        <span className='cd-date'>{ this.props.date }</span>
      </div>
		)
	}
}
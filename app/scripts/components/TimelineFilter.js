import React from 'react';
import { visibilityFilters } from '../actions';

export default class TimelineFilter extends React.Component {
	render() {
		return (
			<div className='filters' >
				{ Object.keys(visibilityFilters).map((key) => {
						return <a key={key} onClick={() => this.props.setFilter(key) }>{ key }</a>;
					}) 
				}
			</div>
		)
	}
}

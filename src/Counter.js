import React from "react";

export default class Counter extends React.Component {
	render() {
		const { counter, onButtonClick } = this.props;

		return (
			<div>
				{counter}
				<button onClick={onButtonClick}>Increase</button>
			</div>
		)
	}
}
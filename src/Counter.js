import React from "react";

export default class Counter extends React.Component {
	state = {
		counter: 0
	}

	onButtonClick = () => {
		this.setState({
			counter: this.state.counter + 1,
		})
	}

	render() {
		const { counter } = this.state;

		return (
			<div>
				{counter}
				<button onClick={this.onButtonClick}>Increase</button>
			</div>
		)
	}
}
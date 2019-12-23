import React from "react";

export default class Counter extends React.Component {
	state = {
		counter: 0
	}

	inputRef = React.createRef()

	onButtonClick = () => {
		const increaseValue = parseInt(this.inputRef.current.value, 10);
		this.setState({
			counter: this.state.counter + increaseValue,
		})
	}

	render() {
		const { counter } = this.state;

		return (
			<div>
				{counter}
				<button onClick={this.onButtonClick}>Increase</button>
				<input ref={this.inputRef} defaultValue={1} type="number" />
			</div>
		)
	}
}
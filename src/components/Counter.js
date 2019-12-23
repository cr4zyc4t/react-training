import React from "react";

export default class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1
	}

	onStepChange = (e) => {
		this.setState({
			step: parseInt(e.target.value, 10)
		})
	}

	onButtonClick = () => {
		this.setState({
			counter: this.state.counter + this.state.step,
		})
	}

	render() {
		const { counter, step } = this.state;

		return (
			<div>
				{counter}
				<button onClick={this.onButtonClick}>Increase</button>
				<select value={step} onChange={this.onStepChange}>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
					<option value={6}>6</option>
				</select>
			</div>
		)
	}
}
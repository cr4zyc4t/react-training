import React from "react";
import AutoFocusInput from "./AutoFocusInput";

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
				<AutoFocusInput onChange={this.onStepChange} value={step} type="number" />
			</div>
		)
	}
}
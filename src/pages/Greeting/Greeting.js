import React from "react"
import AutoFocusInput from "../../components/AutoFocusInput"

export default class Greeting extends React.Component {
	state = {
		name: ""
	}

	render() {
		return (
			<div>
				<label htmlFor="test-input">What's your name?</label>
				<AutoFocusInput id="test-input" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
				<p>Greeting: {this.state.name}</p>
			</div>
		)
	}
}
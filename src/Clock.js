import React, { Component } from "react";

export default class Clock extends Component {
	state = {
		time: new Date()
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				time: new Date()
			})
		}, 1000);
	}

	componentDidUpdate() {
		console.log(`ToanVQ: Clock -> componentDidUpdate -> componentDidUpdate`);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const { time } = this.state;
		return (
			<div>
				{time.toString()}
			</div>
		)
	}
}
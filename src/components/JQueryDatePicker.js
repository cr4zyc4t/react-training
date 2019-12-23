import React, { Component } from "react"

export default class JQueryDatePicker extends Component {
	ref = React.createRef()

	componentDidMount() {
		window.$(this.ref.current).datepicker();
	}

	componentWillUnmount() {
		window.$(this.ref.current).datepicker("destroy");
	}

	render() {
		return (
			<input ref={this.ref} />
		)
	}
}
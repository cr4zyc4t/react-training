import React, { Component } from "react"

export default class AutoFocusInput extends Component {
	ref = React.createRef()

	componentDidMount() {
		this.ref.current.focus()
	}

	render() {
		return (
			<input ref={this.ref} {...this.props} />
		)
	}
}
import React, { Component } from "react"
import axios from "axios"

export default class AsyncList extends Component {
	state = {
		names: []
	}

	componentDidMount() {
		axios.get("http://testserver:3000/api/random-names")
			.then(result => {
				this.setState({
					names: result
				})
			})
			.catch(e => {
				alert(e.name + ": " + e.message)
			})
	}

	render() {
		const listNamesComponents = this.state.names.map((name, i) => (
			<p key={i}>{name}</p>
		))

		return (
			<div style={{
				fontSize: 10,
				maxHeight: 300,
				overflow: "auto"
			}}>
				{listNamesComponents}
			</div>
		)
	}
}
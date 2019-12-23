import React, { Component } from "react"
import faker from "faker";


const randomNames = new Array(100).fill(100).map(() => faker.name.findName())

export default class RandomList extends Component {
	render() {
		const listNamesComponents = randomNames.map((name, i) => (
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
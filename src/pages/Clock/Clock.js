import React from "react";
import { useTime } from "../../utils";
import "./Clock.scss"

export default function Clock() {
	const time = useTime()

	return (
		<div className="clock-container">
			{time.toString()}
		</div>
	)
}
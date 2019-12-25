import React from "react";
import { useTime } from "../../utils";
import "./Clock.scss"

export default function Clock() {
	const time = useTime()

	return (
		<div class="clock-container">
			{time.toString()}
		</div>
	)
}
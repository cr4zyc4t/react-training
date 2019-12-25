import React from "react";
import { useTime } from "../../utils";

export default function Clock() {
	const time = useTime()

	return (
		<div>
			{time.toString()}
		</div>
	)
}
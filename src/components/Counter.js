import React, { useState, useCallback } from "react";

export default function Counter() {
	const [step, setStep] = useState(1);
	const [counter, setCounter] = useState(0);

	const onStepChange = useCallback((e) => {
		setStep(parseInt(e.target.value, 10))
	}, [])

	const onButtonClick = () => {
		setCounter(counter => counter + step)
	}

	return (
		<div>
			{counter}
			<button onClick={onButtonClick}>Increase</button>
			<select value={step} onChange={onStepChange}>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={5}>5</option>
				<option value={6}>6</option>
			</select>
		</div>
	)
}
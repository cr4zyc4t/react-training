import React, { useEffect, useRef } from "react"

export default function AutoFocusInput(props) {
	const ref = useRef(null)

	useEffect(() => {
		ref.current.focus()
	}, [])

	return (
		<input ref={ref} {...props} />
	)
}
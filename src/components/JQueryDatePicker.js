import React, { useRef, useEffect, useCallback } from "react"

// export default class JQueryDatePicker extends Component {
// 	ref = React.createRef()

// 	componentDidMount() {
// 		window.$(this.ref.current).datepicker();
// 	}

// 	componentWillUnmount() {
// 		window.$(this.ref.current).datepicker("destroy");
// 	}

// 	render() {
// 		return (
// 			<input {...this.props} ref={this.ref} />
// 		)
// 	}
// }
const $ = window.$;

function DatePicker({ value, onChange, ...props }) {
	const ref = useRef(null)
	const $datepicker = useRef(null)

	const handleChange = useCallback((dateText, inst) => {
		console.log(`ToanVQ: DatePicker -> dateText`, dateText);
		onChange(dateText)
	}, [onChange])

	useEffect(() => {
		const input = ref.current;
		$datepicker.current = $(input);
		$(input).datepicker({
			defaultDate: new Date(value),
			onSelect: handleChange
		});
		return () => {
			console.log("aqwdwad")
			$(input).datepicker("destroy")
		};
	}, [handleChange, value])

	return (
		<input {...props} ref={ref} defaultValue={new Date(value).toString()} />
	)
}

export default function JQueryDatePicker(props) {
	return (
		<DatePicker key={props.value} {...props} />
	)
}
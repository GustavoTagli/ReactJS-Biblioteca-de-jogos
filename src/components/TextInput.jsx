import PropTypes from "prop-types"

TextInput.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
	setValue: PropTypes.func
}

export default function TextInput({ label, id, value, setValue }) {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input
				type="text"
				name={id}
				id={id}
				value={value}
				onChange={(ev) => setValue(ev.target.value)}
			/>
		</div>
	)
}

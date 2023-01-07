import './Button.css'

const Button = (props) => {
	return (
		<div>
			<button { ...props } className="btn" />
		</div>
		)
}

export default Button
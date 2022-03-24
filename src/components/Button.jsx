import './Button.css';

const Button = ({
	texto = 'Button',
	className = 'btn bg-black',
	funcion = () => {
		console.log('click');
	},
}) => {
	return (
		<button className={className} onClick={funcion}>
			{texto}
		</button>
	);
};

export default Button;

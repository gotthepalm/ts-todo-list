type Props = {
	children: string;
	disabled?: boolean | undefined;
	type: 'submit' | 'reset' | 'button' | undefined;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	stylishment?: string;
};

export default function Button({ children, disabled, type, className, onClick, stylishment }: Props) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`button ${className} ${
				stylishment === 'delete'
					? 'hover:bg-red-100 hover:border-red-200 hover:text-red-300'
					: stylishment === 'submit'
						? 'bg-blue-500 hover:bg-blue-300 text-white border-0'
						: null
			}`}
		>
			{children}
		</button>
	);
}

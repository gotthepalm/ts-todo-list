type Props = {
	children: string;
	disabled?: boolean | undefined;
	type: 'submit' | 'reset' | 'button' | undefined;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, disabled, type, className, onClick }: Props) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`button ${className}`}
		>
			{children}
		</button>
	);
}

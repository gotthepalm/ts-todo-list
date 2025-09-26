type Props = {
	type: string,
	value: string,
	onChange: React.ChangeEventHandler<HTMLInputElement>
	className?: string,
	placeholder: string
}

export default function Input({type, onChange, value, className, placeholder}: Props) {
	return (
		<input placeholder={placeholder} type={type} value={value} onChange={onChange} className={`input ${className}`}/>
	);
};
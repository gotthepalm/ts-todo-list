import { useState, useContext } from 'react';
import { TaskContext } from '../../../App';

export default function Form() {
	const context = useContext(TaskContext);

	if (!context) {
		return <div>TaskContext not found</div>;
	}

	const { setTaskArray } = context;

	const [value, setValue] = useState('');

	const [subInputs, setSubInputs] = useState(['']);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setValue('');
	}
	function handleChange(event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<any>>) {
		setState(event.target.value);
	}
	function handleChangeSubInputs(event: React.ChangeEvent<HTMLInputElement>, index: number) {
		const newArray = subInputs.map((value, elindex) => {
			if (elindex == index) {
				return event.target.value;
			}
			return value;
		});
		console.log(newArray)
	}

	return (
		<form action='submit' onSubmit={(e) => handleSubmit(e)}>
			<input type='text' value={value} onChange={(e) => handleChange(e, setValue)} />
			<button onClick={() => setSubInputs((prev) => [...prev, ''])}>Add Subtask</button>
			{subInputs.map((value, index) => (
				<input key={index} type='text' value={subInputs[index]} onChange={(e) => handleChangeSubInputs(e, index)} />
			))}
		</form>
	);
}

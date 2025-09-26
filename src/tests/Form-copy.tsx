import { useState, useContext } from 'react';
import { TaskContext } from '../../../../App';

export default function Form() {
	const context = useContext(TaskContext);

	if (!context) {
		return <div>TaskContext not found</div>;
	}

	const { setTaskArray } = context;

	const [value, setValue] = useState('');
	// const [subValue, setSubValue] = useState('');

	const [subInputs, setSubInputs] = useState(['']);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setTaskArray((prev) => [...prev, {title: value, subTask: subInput}]);
		setValue('')
		setSubInputs([''])
	}
	function handleChange(event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<any>>) {
		setState(event.target.value);
	}
	function handleChangeSubInputs(event: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<any>>) {
		setState(event.target.value);
	}
	console.log(subInputs)
	// function handleError(): boolean {
	// 	if (value && subInput) {
	// 		return false
	// 	} else {
	// 		return true
	// 	}
	// };

	return (
		<form action='submit' onSubmit={(e) => handleSubmit(e)}>
			<input type='text' value={value} onChange={(e) => handleChange(e, setValue)} />
			<button onClick={() => setSubInputs(prev => [...prev, ''])}>Add Subtask</button>
			{subInputs.map((value, index) => (
				<input key={index} type='text' value={subInputs} onChange={(e) => handleChangeSubInputs(e, setSubInputs)} />
			))}
			
			{/* <button disabled={handleError()}>Create Task</button> */}
		</form>
	);
}

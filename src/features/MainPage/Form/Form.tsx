import { useState, useContext } from 'react';
import { TaskContext } from '../../../App';
import Button from '../../../shared/Button';
import Input from '../../../shared/Input';

export default function Form() {
	const context = useContext(TaskContext);

	if (!context) {
		return;
	}

	const { setTaskArray } = context;
	const [value, setValue] = useState('');
	const [subValues, setSubValues] = useState<string[]>([]);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setTaskArray((prev) => [...prev, { title: value, subTasks: subValues }]);
		setValue('');
		setSubValues([]);
	}

	function changeSubValues(event: React.ChangeEvent<HTMLInputElement>, inputIndex: number) {
		const newArray = subValues.map((value, index) => {
			if (inputIndex === index) {
				return event.target.value;
			} else {
				return value;
			}
		});
		setSubValues(newArray);
	}

	function deleteSubValue(inputIndex: number) {
		const newArray = subValues.filter((_, index) => index !== inputIndex);
		setSubValues(newArray);
	}

	function cancelTask() {
		setValue('');
		setSubValues([]);
	}

	function handleError(): boolean {
		if (value) {
			if (subValues.includes('')) {
				return true;
			}
			return false;
		} else {
			return true;
		}
	}
	return (
		<form action='submit' onSubmit={(e) => handleSubmit(e)} className='mb-8'>
			<div className='bg-white flex flex-col items-center p-5 rounded-2xl mb-4 relative w-full'>
				<div className='w-full flex justify-between pb-2 border-b-[1px] border-[#dee1e6]'>
					<Input
						placeholder='Type a task name...'
						type='text'
						value={value}
						onChange={(e) => setValue(e.target.value)}
						className='max-w-[70%] w-full mr-2.5'
					/>
					<Button
						disabled={handleError()}
						type='button'
						onClick={() => setSubValues((prev) => [...prev, ''])}
						className='max-w-[25%] w-full'
					>
						Add Subtask
					</Button>
				</div>
				<ul className='w-full flex flex-col gap-2.5 has-[li]:pt-2.5 pl-10'>
					{subValues.map((_, index) => (
						<li className='w-full flex justify-between rounded-[5px] border-[1px] border-[#dee1e6]' key={index}>
							<Input
								placeholder='Type a subtask name...'
								type='text'
								value={subValues[index]}
								onChange={(e) => changeSubValues(e, index)}
								className='max-w-[80%] w-full mr-2.5 border-0'
							/>
							<Button
								type='button'
								onClick={() => deleteSubValue(index)}
								className='max-w-[15%] w-full border-0 border-l-[1px] rounded-l-none'
							>
								X
							</Button>
						</li>
					))}
				</ul>
			</div>
			<div className='flex justify-between bg-white items-center p-5 rounded-2xl relative w-full'>
				<Button
					disabled={handleError()}
					type='submit'
					className='w-full mr-2.5 bg-blue-500 hover:bg-blue-300 text-white border-0 disabled:bg-blue-300'
				>
					Create Task
				</Button>
				<Button disabled={handleError()} onClick={() => cancelTask()} type='button' className='w-[25%] grow-[1] bg-white'>
					Cancel
				</Button>
			</div>
		</form>
	);
}

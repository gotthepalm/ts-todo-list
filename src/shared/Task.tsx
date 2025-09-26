import { useContext } from 'react';
import { TaskContext } from '../App';
import Button from './Button';

type Props = {
	title: string;
	subTasks: string[];
	taskIndex: number;
};

export default function Task({ title, subTasks, taskIndex }: Props) {
	const context = useContext(TaskContext);

	if (!context) {
		return;
	}

	const { taskArray, setTaskArray } = context;

	function deleteTask() {
		const newArray = taskArray.filter((_, index) => index !== taskIndex);
		setTaskArray(newArray);
	}

	return (
		<li className='bg-white flex flex-row p-5 rounded-2xl'>
			<div className='flex flex-col items-start p-5 w-full'>
				<h2 className='text-2xl font-medium mb-4'>{title}</h2>
				<ul className='pl-10 list-disc mb-5 flex flex-col gap-2.5'>
					{subTasks.map((value, index) => (
						<li key={index}>{value}</li>
					))}
				</ul>
			</div>
			<Button type='button' onClick={() => deleteTask()} className='self-end grow-[1]'>
				Delete
			</Button>
		</li>
	);
}

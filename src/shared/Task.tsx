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
			<div className='flex flex-col items-start w-full'>
				<h2 className='text-[30px] font-medium mb-4'>{title}</h2>
				<ul className='list-none mb-5 flex flex-col gap-2.5 w-full'>
					{subTasks.map((value, index) => (
						<div key={index} className='flex items-center'>
							<span className='block h-[2px] w-14 bg-gray-200 mr-7.5'></span>

							<li className='text-[16px] font-medium text-gray-800'>
								{value}
							</li>
						</div>
					))}
				</ul>
			</div>
			<Button
				type='button'
				onClick={() => deleteTask()}
				className='self-end grow-[1]'
				stylishment='delete'
			>
				Delete
			</Button>
		</li>
	);
}

import { useContext } from 'react';
import Form from './Form/Form';
import Task from '../../shared/Task';
import { TaskContext } from '../../App';

export default function MainPage() {
	const context = useContext(TaskContext);

	if (!context) {
		return;
	}

	const { taskArray } = context;

	return (
		<main className='bg-[#e9ecf3] min-h-dvh'>
			<div className='p-15'>
				<div className='w-[800px] max-w-full mx-auto px-6'>
					<h1 className='text-5xl text-[#292a2e] font-semibold mb-14'>Create your to-do list!</h1>
					<Form></Form>
					<ul className='list-none flex flex-col gap-2.5'>
						{taskArray.map((value, index) => (
							<Task key={index} title={value.title} subTasks={value.subTasks} taskIndex={index}></Task>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}

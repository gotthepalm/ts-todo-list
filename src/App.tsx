import { useState, createContext } from 'react';
import MainPage from './features/MainPage/MainPage';

type Context = {
	taskArray: {
		title: string;
		subTasks: string[];
	}[];

	setTaskArray: React.Dispatch<
		React.SetStateAction<
			{
				title: string;
				subTasks: string[];
			}[]
		>
	>;
};

export const TaskContext = createContext<Context | null>(null);

function App() {
	const [taskArray, setTaskArray] = useState<{ title: string; subTasks: string[]; }[]>([]);

	return (
		<TaskContext.Provider value={{ taskArray, setTaskArray }}>
			<MainPage></MainPage>
		</TaskContext.Provider>
	);
}

export default App;

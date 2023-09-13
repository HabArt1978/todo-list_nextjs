import api from '@/api'
import AddTask from './components/AddTask/AddTask'
import TodoList from './components/TodoList/TodoList'

export default async function Home(): Promise<JSX.Element> {
	const tasks = await api.tasks.getAllTasks()
	console.log(tasks)

	return (
		<main className="max-w-4xl mx-auto mt-4">
			<div className="text-center my-4 flex flex-col gap-4">
				<h1 className="text-2xl font-bold">Cписок дел</h1>
				<AddTask />
			</div>
			<TodoList tasks={tasks} />
		</main>
	)
}

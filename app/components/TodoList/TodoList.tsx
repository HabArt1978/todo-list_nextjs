import type { ITask } from '@/types/task.interface'
import type { FC } from 'react'
import Task from './Task/Task'

interface ITodosListProps {
	tasks: ITask[]
}

const TodoList: FC<ITodosListProps> = ({ tasks }): JSX.Element => {
	return (
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr>
						<th className="text-base text-blue-500">задачи</th>
						<th className="text-base text-orange-400">действия</th>
					</tr>
				</thead>
				{tasks.map((task) => (
					<Task key={task.id} task={task} />
				))}
			</table>
		</div>
	)
}

export default TodoList

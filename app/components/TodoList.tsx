import type { ITask } from '@/types/task.interface'
import type { FC } from 'react'

interface ITodosListProps {
	tasks: ITask[]
}

const TodoList: FC<ITodosListProps> = ({ tasks }): JSX.Element => {
	return (
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr>
						<th>задачи</th>
						<th>действия</th>
					</tr>
				</thead>
				{tasks.map((task) => (
					<tbody key={task.id}>
						<tr>
							<td>{task.text}</td>
							<td>Blue</td>
						</tr>
					</tbody>
				))}
			</table>
		</div>
	)
}

export default TodoList

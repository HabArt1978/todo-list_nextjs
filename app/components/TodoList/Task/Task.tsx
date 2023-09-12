import type { ITask } from '@/types/task.interface'
import type { FC } from 'react'

interface ITaskProps {
	task: ITask
}

const Task: FC<ITaskProps> = ({ task }): JSX.Element => (
	<tbody key={task.id}>
		<tr>
			<td>{task.text}</td>
			<td>Blue</td>
		</tr>
	</tbody>
)
export default Task

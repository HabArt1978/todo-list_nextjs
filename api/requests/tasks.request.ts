import type { ITask } from '@/types/task.interface'
import { httpClient } from '@/api'

export default {
	async getAllTasks() {
		const { data } = await httpClient.get('/tasks', {
			headers: {
				'Cache-Control': 'no-cache',
				Pragma: 'no-cache',
				Expires: '0',
			},
		})
		return data as ITask[]
	},

	async createTask(data: ITask): Promise<ITask> {
		const res = await httpClient.post('/tasks', data)
		return res.data as ITask
	},
}

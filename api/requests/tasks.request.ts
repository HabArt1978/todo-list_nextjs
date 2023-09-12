import type { ITask } from '@/types/task.interface'
import { httpClient } from '@/api'

export default {
	async getAllTasks() {
		const { data } = await httpClient.get('/tasks')
		return data as ITask[]
	},
}

import type { ITask } from '@/types/task.interface'
import type { AxiosInstance } from 'axios'

const tasksRequestModule = (httpClient: AxiosInstance) => ({
	async getAllTasks(): Promise<ITask[]> {
		const { data } = await httpClient.get('/tasks')
		return data as ITask[]
	},
})

export default tasksRequestModule

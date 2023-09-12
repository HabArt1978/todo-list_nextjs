import type { ITask } from '@/types/task.interface'

const baseURL = 'http://localhost:8000'

export const getAllTasks = async (): Promise<ITask[]> => {
	const res = await fetch(`${baseURL}/tasks`)
	const tasks = await res.json()
	return tasks
}

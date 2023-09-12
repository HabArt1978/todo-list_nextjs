import axios from 'axios'
import tasksRequestModule from './requests/tasks.request'

export const httpClient = axios.create({
	baseURL: 'http://localhost:8000',
	responseType: 'json',
})

const api = {
	tasks: tasksRequestModule,
}

export default api

import axios from 'axios'
import tasksRequestModule from './requests/tasks.request'

const httpClient = axios.create({
	baseURL: 'http://localhost:8000',
	responseType: 'json',
})

const api = {
	tasks: tasksRequestModule(httpClient),
}

export default api

import axios from 'axios'
import tasksRequestModule from './requests/tasks.request'

export const httpClient = axios.create({
	baseURL: 'http://localhost:8000',
	responseType: 'json',
	// headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache', Expires: '0' },
	// headers:
	// Запросить URL-адрес без использования кеша браузера
	// Eсли вы не хотите отключать кеширование для всех запросов axios, вы можете отключить кеширование только для одного запроса
})

const api = {
	tasks: tasksRequestModule,
}

export default api

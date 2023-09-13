'use client'

import { HiPlus } from 'react-icons/hi'
import ModalBox from '../UI/ModalBox'
import { type FormEventHandler, useState } from 'react'
import api from '@/api'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'

const AddTask = (): JSX.Element => {
	const router = useRouter()
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const [newTaskValue, setNewTaskValue] = useState<string>('')

	const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault()

		await api.tasks.createTask({
			id: uuidv4(),
			text: newTaskValue,
		})

		setNewTaskValue('')
		setModalOpen(false)
		router.refresh()
	}

	return (
		<div>
			<button
				className="btn btn-primary w-full"
				onClick={() => setModalOpen(true)}
			>
				Добавить задачу <HiPlus size={18} />
			</button>
			<ModalBox modalOpen={modalOpen} setModalOpen={setModalOpen}>
				<form onSubmit={handleSubmitNewTask}>
					<h3 className="font-bold text-lg">Добавить новую задачу</h3>
					<div className="modal-action">
						<input
							type="text"
							value={newTaskValue}
							onChange={(event) => setNewTaskValue(event.target.value)}
							placeholder="Введите текст задачи"
							className="input input-bordered w-full"
						/>
						<button
							type="submit"
							className="btn bg-orange-300 hover:bg-orange-400"
						>
							Отправить
						</button>
					</div>
				</form>
			</ModalBox>
		</div>
	)
}

export default AddTask

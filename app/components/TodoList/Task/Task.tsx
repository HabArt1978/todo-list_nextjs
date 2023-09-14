'use client'

import type { ITask } from '@/types/task.interface'
import { useState, type FC, type FormEventHandler } from 'react'
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi'
import ModalBox from '../../UI/ModalBox'
import { useRouter } from 'next/navigation'
import api from '@/api'

interface ITaskProps {
	task: ITask
}

const Task: FC<ITaskProps> = ({ task }): JSX.Element => {
	const router = useRouter()

	const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
	const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false)
	const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

	const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault()

		await api.tasks.updateTask({
			id: task.id,
			text: taskToEdit,
		})

		setOpenModalEdit(false)
		router.refresh()
	}

	const handleDeleteTask = async (id: string): Promise<void> => {
		await api.tasks.deleteTask(id)
		setOpenModalDeleted(false)
		router.refresh()
	}

	return (
		<tbody key={task.id}>
			<tr>
				<td className="w-full">{task.text}</td>
				<td className="flex gap-5">
					<HiOutlinePencilAlt
						className="text-blue-500"
						size={25}
						cursor="pointer"
						onClick={() => setOpenModalEdit(true)}
					/>

					<ModalBox modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
						<form onSubmit={handleSubmitEditTask}>
							<h3 className="font-bold text-lg">Редактирование задачи</h3>
							<div className="modal-action">
								<input
									type="text"
									value={taskToEdit}
									onChange={(event) => setTaskToEdit(event.target.value)}
									placeholder="Введите текст задачи"
									className="input input-bordered w-full"
								/>
								<button
									type="submit"
									className="btn bg-orange-300 hover:bg-orange-400"
								>
									Обновить
								</button>
							</div>
						</form>
					</ModalBox>

					<HiOutlineTrash
						className="text-red-500"
						size={25}
						cursor="pointer"
						onClick={() => setOpenModalDeleted(true)}
					/>

					<ModalBox
						modalOpen={openModalDeleted}
						setModalOpen={setOpenModalDeleted}
					>
						<h3 className="text-lg">
							Вы уверены, что хотите удалить эту задачу?
						</h3>
						<div className="modal-action">
							<button
								className="btn bg-red-400 hover:bg-red-500"
								onClick={() => handleDeleteTask(task.id)}
							>
								Удалить
							</button>
						</div>
					</ModalBox>
				</td>
			</tr>
		</tbody>
	)
}
export default Task

'use client'

import { HiPlus } from 'react-icons/hi'
import ModalBox from './ModalBox'
import { useState } from 'react'

const AddTaskBtn = (): JSX.Element => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	return (
		<div>
			<button
				className="btn btn-primary w-full"
				onClick={() => setModalOpen(true)}
			>
				Добавить задачу <HiPlus size={18} />
			</button>
			<ModalBox modalOpen={modalOpen} setModalOpen={setModalOpen}>
				Новое сообщение для модального окна
			</ModalBox>
		</div>
	)
}

export default AddTaskBtn

import type { FC, ReactNode } from 'react'

interface IModalProps {
	modalOpen: boolean
	setModalOpen: (modalOpen: boolean) => boolean | void
	children: ReactNode
}

const ModalBox: FC<IModalProps> = ({
	modalOpen,
	setModalOpen,
	children,
}): JSX.Element => (
	<dialog id="my_modal_3" className={`modal ${modalOpen ? 'modal-open' : ''}`}>
		<div className="modal-box">
			<form method="dialog">
				<button
					className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					onClick={() => setModalOpen(false)}
				>
					✕
				</button>
			</form>
			{children}
		</div>
	</dialog>
)

export default ModalBox

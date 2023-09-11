import { HiPlus } from 'react-icons/hi'

const AddTask = (): JSX.Element => {
	return (
		<div>
			<button className="btn btn-primary w-full">
				Добавить задачу <HiPlus size={18} />
			</button>
		</div>
	)
}

export default AddTask

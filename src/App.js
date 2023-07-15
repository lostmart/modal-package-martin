import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

const TestContet = () => {
	return (
		<>
			<div className="modal-header">
				<h5 className="modal-title">Modal title</h5>
			</div>
			<div className="modal-body">
				<img
					src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="random"
				/>
				<p>Modal body text goes here.</p>
			</div>
		</>
	)
}

function App() {
	const [showModal, setModal] = useState(false)

	const handleClick = () => {
		setModal(() => !showModal)
	}

	return (
		<div className="container">
			<button onClick={handleClick}>Show Modal</button>
			<Modal showModal={showModal} onClick={handleClick}>
				<TestContet />
			</Modal>
		</div>
	)
}

export default App

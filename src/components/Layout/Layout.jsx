import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import Signup from '../pages/authPage/Signup'
import Login from '../pages/authPage/Login'


const Layout = () => {
	const [isShowModal, setIsShowModal] = useState(false)
	
	const showModal = () => setIsShowModal(true)

	const closeModal = () => setIsShowModal(false)

	return (
		<div className='container'>
			
			<Header  showModal={showModal}/>

			<Suspense fallback={<h1>Loading...</h1>}>
				<Outlet />
			</Suspense>
			
			{/* {isShowModal && (
				<>
					<Signup />
					<Modal closeModal={closeModal}>
					
					</Modal>
				</>
			)} */}
			
			
			{/* Footer */}
		</div>
	)
}

export default Layout
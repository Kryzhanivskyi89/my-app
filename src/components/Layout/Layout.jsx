import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
// import { useParams } from 'react-router-dom';

import Header from '../Header/Header'
// import Modal from '../Modal/Modal'
// import Signup from '../pages/authPage/Signup'
// import Login from '../pages/authPage/Login'
import Footer from '../Footer/Footer'


const Layout = () => {
	// const { id } = useParams();
	
	const [isShowModal, setIsShowModal] = useState(false)
	
	const showModal = () => setIsShowModal(true)

	const closeModal = () => setIsShowModal(false)

	return (
		<div className='container'>
			
			<Header
				// showModal={showModal}
			/>
			
			<main>
				<section>
					<Suspense fallback={<h1>Loading...</h1>}>
						<Outlet />
					</Suspense>

					{/* {isShowModal && (
						<>
							<Modal closeModal={closeModal}>
							
							</Modal>
						</>
					)} */}
				</section>
			</main>

			<Footer/>
		</div>
	)
}

export default Layout
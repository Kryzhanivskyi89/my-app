// import { useEffect } from 'react'

// import style from './style.module.css'

// const Modal = ({ closeModal, children }) => {
    
// 	useEffect(() => {
// 		const handlePressESC = (e) => {
// 			console.log('object :>> ', Date.now())
// 			if (e.code === 'Escape') closeModal()
// 		}

// 		window.addEventListener('keydown', handlePressESC)
// 		return () => {
// 			window.removeEventListener('keydown', handlePressESC)
// 		}
// 	}, [closeModal])

// 	return (
// 		<div
//             className={style.modal}
// 			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// 		>
// 			<div className={style.modal__dialog}>
// 				<div className={1}>
// 					<div className={style.modal__content}>
// 						<h5 className='modal-title'> Modal</h5>
// 						<button
// 							type='button'
// 							className='btn-close'
// 							aria-label='Close'
// 							onClick={closeModal}
//                         >
//                             Close
//                         </button>
// 					</div>
// 					<div className={style.modal__form}>{children}</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Modal

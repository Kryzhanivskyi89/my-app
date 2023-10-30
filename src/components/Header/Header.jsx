import { NavLink, useNavigate } from "react-router-dom"
// import { useState } from 'react'

import style from './style.module.css'
// import Modal from "../Modal/Modal"
// import Login from "../pages/authPage/Login"
// import Signup from "../pages/authPage/Signup"

import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/authOperations';

const Header = ({ showModal}) => {
    const { token } = useSelector((state) => state.auth)

    // const [isShowModal, setIsShowModal] = useState(false)
	// const showModal = () => setIsShowModal(true)
	// const closeModal = () => setIsShowModal(false)
    const dispatch = useDispatch();

    const navigate = useNavigate()
	const handleSignUp = () => {
		navigate('/auth/:id')
    }
	return (
		<>
            <nav className={style.navbar}>
                <div className={style.logo}>ANDREW</div>  {/* <!-- LOGO --> */}

                <ul className={style.nav__links}>  {/* <!-- NAVIGATION MENU --> */}
                    
                    {/* <!-- USING CHECKBOX HACK --> */}
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className={style.hamburger}>&#9776;</label>
                    
                    <div className={style.menu}>  {/* <!-- NAVIGATION MENUS --> */}
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/chat'>Chat</NavLink>
                        </li>
                        <li className={style.services}>
                            <NavLink href="">Contacts</NavLink>

                            {/* <!-- DROPDOWN MENU --> */}
                            <ul className={style.dropdown}>
                                <li><a href="https://www.linkedin.com/in/andrew-full-stack/">LinkedIn </a></li>
                                <li><a href="https://www.facebook.com/andriykryzhanivskyi/">Facebook</a></li>
                                <li><a href="https://www.instagram.com/andrii_krizhanivskyi/">Instagram</a></li>
                                <li><a href="https://t.me/andrew_506">Telegram</a></li>
                                <li><a href="https://www.youtube.com/@andrewecolog4426/featured">YouTube</a></li> 
                                <li><a href="https://github.com/Kryzhanivskyi89">GitHub</a></li>
                            </ul>
                        </li>
                    </div>
                </ul>
                         
                <div className={style.authbtn}>
                    {!token && (
                        <button
                        className={style.btn}
                        type="button"
                        onClick={handleSignUp}
                        >
                        Авторизація
		 			</button>)}
                     {token && (
                         <button
                         className={style.btn}
                         type="button"
                         onClick={() => dispatch(logoutThunk())}
                        >вихід</button>)}
                </div>
            </nav>
		</>
	)
}

export default Header



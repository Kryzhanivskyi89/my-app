import { NavLink, useNavigate } from "react-router-dom"
import { useState } from 'react'

import style from './style.module.css'


const Header = ({showModal}) => {

    // const [isShowModal, setIsShowModal] = useState(false)

	// const showModal = () => setIsShowModal(true)

	// const closeModal = () => setIsShowModal(false)


    const navigate = useNavigate()
	const handleSignUp = () => {
		navigate('/signup')
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
                            <NavLink to='/contacts'>Contacts</NavLink>
                        </li>
                        <li className={style.services}>
                            <a href="/">Services</a>

                            {/* <!-- DROPDOWN MENU --> */}
                            <ul className={style.dropdown}>
                                <li><a href="/">Dropdown 1 </a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 3</a></li>
                                <li><a href="/">Dropdown 4</a></li>
                            </ul>
                        </li>
                    </div>
                </ul>
                         
                <div>
                    <button className={style.btn} onClick={showModal}>
                        Sign Up
		 			</button>
                    {/* <button
                        className={style.btn}
                        onClick={handleSignUp}
						onClick={profile ? handleLogOut : handleLogin}
                    >
                        Sign Up
						{profile ? 'LogOut' : 'LogIn'}
					</button>  */}
                </div>
            </nav>
		</>
	)
}

export default Header



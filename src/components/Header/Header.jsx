import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { logoutThunk } from '../../redux/auth/authOperations';
import style from './style.module.css'

import {AuthButton} from "../AuthButton/AuthButton"

const Header = ( {onClick} ) => {
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const navigate = useNavigate()
	const handleSignUp = () => {
		navigate('/auth/:id')
    }
	return (
		<>
            <nav className={style.navbar}>
                <div className={style.logo}>&lt;AndrewDev/&gt;</div>  {/* <!-- LOGO --> */}

                <ul className={style.nav__links}>  {/* <!-- NAVIGATION MENU --> */}
                    
                    <div className={style.menu}>  {/* <!-- NAVIGATION MENUS --> */}
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/calendar'>Calendar</NavLink></li>
                        <li><NavLink to='/todo'>ToDo</NavLink></li>
                        <li><NavLink to='/chat'>Chat</NavLink></li>
                        <li><NavLink to='/music-player'>Music-player</NavLink></li>
                        <li><NavLink to='/social'>Social</NavLink></li>
                        <li><NavLink to='/email'>E-mail</NavLink></li>
                        <li className={style.services}>
                            <NavLink href="">Contacts</NavLink>
                            {/* <!-- DROPDOWN MENU --> */}
                            <ul className={style.dropdown}>
                                <li><a href="https://www.linkedin.com/in/andrew-full-stack/" target="_blanc">LinkedIn </a></li>
                                <li><a href="https://www.facebook.com/andriykryzhanivskyi/" target="_blanc">Facebook</a></li>
                                <li><a href="https://www.instagram.com/andrii_krizhanivskyi/" target="_blanc">Instagram</a></li>
                                <li><a href="https://t.me/andrew_506" target="_blanc">Telegram</a></li>
                                <li><a href="https://www.youtube.com/@andrewecolog4426/featured" target="_blanc">YouTube</a></li> 
                                <li><a href="https://github.com/Kryzhanivskyi89" target="_blanc">GitHub</a></li>
                            </ul>
                        </li>
                    </div>
                </ul>

                {token ? (
                    <AuthButton onClick={() => dispatch(logoutThunk())}>
                        {/* // <AuthButton onClick={() => console.log('poco')}> */}
                        Вихід
                    </AuthButton>
                ) : (
                    <AuthButton onClick={handleSignUp}>
                        Авторизація
                    </AuthButton>
                )}
                         
                {/* <div className={style.authbtn}>
                    {!token && (
                        <button className={style.btn} type="button" onClick={handleSignUp}>
                            Авторизація
		 			    </button>)}

                    {token && (
                        <button className={style.btn} type="button" onClick={() => dispatch(logoutThunk())}>
                            вихід
                        </button>)}
                </div> */}
            </nav>
		</>
	)
}

export default Header



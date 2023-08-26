import { NavLink, useNavigate } from "react-router-dom"

import style from './style.module.css'
import { LoginPage } from "../pages/loginPage/LoginPage"

const Header = () => {

    const navigate = useNavigate()
	const handleLogin = () => {
		navigate('/login')
	}

	return (
		<>
            <nav className={style.navbar}>
                <div class={style.logo}>ANDREW</div>  {/* <!-- LOGO --> */}

                <ul className={style.nav__links}>  {/* <!-- NAVIGATION MENU --> */}
                    
                    {/* <!-- USING CHECKBOX HACK --> */}
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" className={style.hamburger}>&#9776;</label>
                    
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
                    <button
                        className={style.btn}
                        onClick={handleLogin}
						// onClick={profile ? handleLogOut : handleLogin}
                    >
                        Login
						{/* {profile ? 'LogOut' : 'LogIn'} */}
					</button> 
                </div>
            </nav>
		</>
	)
}

export default Header
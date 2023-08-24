import { NavLink } from "react-router-dom"

import style from './style.module.css'

const Header = () => {
	return (
		<>
            <nav className={style.nav}>
                <div>
                    <NavLink to='/'>Home</NavLink>

                    <NavLink to='/contacts'>Contacts</NavLink>

                    {/* <NavLink to='/contacts'>Contacts</NavLink> */}
                </div>
                <div>
                    {/* <button
		// 				className='btn btn-outline-success'
		// 				onClick={profile ? handleLogOut : handleLogin}
		// 			>
		// 				{profile ? 'LogOut' : 'LogIn'}
		// 			</button> */}
                </div>
            </nav>
		</>
	)
}

export default Header
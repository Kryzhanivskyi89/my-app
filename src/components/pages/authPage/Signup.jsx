import React from 'react'
import { Link } from "react-router-dom"

import style from './style.module.css'
import { signUp } from '../../../api/authApi'

function Signup() {

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
        console.log(newUser)
        signUp(newUser)
			.then(() => {
				console.log('Registration successfully')
				// dispatch(
				// 	loginThunk({
				// 		email: e.target.elements.email.value,
				// 		password: e.target.elements.password.value,
				// 	})
				// )
				// navigate('/login')
			})
			.catch((error) => console.log(error))
    }
    
    return (

    
<div className={style.section}>
    <div className={style.container}>
        <div className={style.row, style.full__height /*justify-content-center*/}>
            <div className="col-12 text-center align-self-center py-5">
                <div className={style.section, /*pb-5 pt-5 pt-sm-2*/ style.text__center}>
            
                    {/* <input className={style.checkbox} type="checkbox" id="reg-log" name="reg-log"/>
                    <label for="reg-log"></label> */}
                    <div className={style.card__3d__wrap /*mx-auto*/}>
                        <div className={style.card__3d__wrapper}>
                    
                            <form onSubmit={handleSubmit} className={style.card__front}>
                                <div className={style.center__wrap}>
                                    <div className={style.section,  style.text__center}>
                                        <h4 className="mb-4 pb-3">Sign Up</h4>
                                            
                                        <div className={style.form__group}>
                                            <input type="text" name="name" className={style.form__style} placeholder="Your Full Name" id="name" autoComplete="off"/>
                                                <i className="input__icon uil uil-user"></i>
                                        </div> 
                                            
                                        <div className={style.form__group} mt-2>
                                            <input type="email" name="email" className={style.form__style} placeholder="Your Email" id="email" autoComplete="off"/>
                                                <i className="input__icon uil uil-at"></i>
                                        </div>  
                                            
                                        <div className={style.form__group} mt-2>
                                            <input type="password" name="password" className={style.form__style} placeholder="Your Password" id="password" autoComplete="off"/>
                                                <i className="input__icon uil uil-lock-alt"></i>
                                        </div>
                                        <div>
					                        <Link to='/login'>Login</Link>
				                        </div>
                                        <button type = 'submit' className={style.btn /*mt-4*/}>submit</button>
                                    </div>
                                </div>
                            </form>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  

  )
}

export default Signup
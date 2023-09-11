import React from 'react'

// import style from './style.module.css'
import style from './style.module.css'

const Login = () => {



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
                                
                                    <form className={style.card__front}>
                                        <div className={style.center__wrap}>
                                            <div className={style.section /*style.text__center*/}>
                                                <h4 className="mb-4 pb-3">Log In</h4>

                                                <div className={style.form__group}>
                                                    <input type="email" name="email" className={style.form__style} placeholder="Your Email" id="email" autoComplete="off"/>
                                                        <i className={style.input__icon /*uil uil-at*/}></i>
                                                </div>  

                                                <div className={style.form__group /*style.mt__2*/} >
                                                    <input type="password" name="password" className={style.form__style} placeholder="Your Password" id="password" autoComplete="off"/>
                                                        <i className="input__icon uil uil-lock-alt"></i>
                                                </div>

                                                <button type="submit" className={style.btn /*mt-4*/}>submit</button>
                                    
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

export default Login

import React from 'react'

import style from './style.module.css'

export const LoginPage = () => {
  return (
    <div>
      <a href="https://front.codes/" className={style.logo} target="_blank">
        {/* <img src="https://assets.codepen.io/1462889/fcy.png" alt=""/> */}
      </a>

  <div className={style.section}>
    <div className={style.container}>
          <div className={style.row, style.full__height /*justify-content-center*/}>
        <div className="col-12 text-center align-self-center py-5">
          <div className={style.section, /*pb-5 pt-5 pt-sm-2*/ style.text__center}>
            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                <input className={style.checkbox} type="checkbox" id="reg-log" name="reg-log"/>
                  <label for="reg-log"></label>
            <div className={style.card__3d__wrap /*mx-auto*/}>
              <div className={style.card__3d__wrapper}>
                      {/* Log In */}
                <div className={style.card__front}>
                  <div className={style.center__wrap}>
                    <div className={style.section /*style.text__center*/}>
                      <h4 className="mb-4 pb-3">Log In</h4>
                        <div className={style.form__group}>
                          <input type="email" name="logemail" className={style.form__style} placeholder="Your Email" id="logemail" autocomplete="off"/>
                          <i className={style.input__icon /*uil uil-at*/}></i>
                        </div>  
                        <div className={style.form__group /*style.mt__2*/} >
                          <input type="password" name="logpass" className={style.form__style} placeholder="Your Password" id="logpass" autocomplete="off"/>
                          <i className="input__icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" className={style.btn /*mt-4*/}>submit</a>
                        <p className={style.text__center} /*"mb-0 mt-4"*/ ><a href="#0" className={style.link}>Forgot your password?</a></p>
                    </div>
                  </div>
                </div>


                    {/* Sign Up */}
                <div className={style.card__back}>
                  <div className={style.center__wrap}>
                    <div className={style.section,  style.text__center}>
                      <h4 className="mb-4 pb-3">Sign Up</h4>
                      
                      <div className={style.form__group}>
                        <input type="text" name="logname" className={style.form__style} placeholder="Your Full Name" id="logname" autocomplete="off"/>
                        <i className="input__icon uil uil-user"></i>
                      </div> 
                       
                      <div className={style.form__group} mt-2>
                        <input type="email" name="logemail" className={style.form__style} placeholder="Your Email" id="logemail" autocomplete="off"/>
                        <i className="input__icon uil uil-at"></i>
                      </div>  
                      
                      <div className={style.form__group} mt-2>
                        <input type="password" name="logpass" className={style.form__style} placeholder="Your Password" id="logpass" autocomplete="off"/>
                        <i className="input__icon uil uil-lock-alt"></i>
                      </div>
                      
                      <a href="#" className={style.btn /*mt-4*/}>submit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}




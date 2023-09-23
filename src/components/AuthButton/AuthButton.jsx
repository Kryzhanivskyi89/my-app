import React from 'react'
import { useNavigate, useParams } from "react-router-dom"

import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/authOperations';
import style from './style.module.css'


export const AuthButton = ({isRegistration, showModal}) => {
    
    const dispatch = useDispatch();
    const { id } = useParams();
        
    const navigate = useNavigate()
        const handleSignUp = () => {
            navigate('/auth/:id')
        }
        
        const handleLogin = () => {
            navigate('/auth/signin')
        }
    
    return (
      <div>
          {isRegistration && (
                        <button
                        className={style.btn}
                        type="button"
                        onClick={handleSignUp}
                        >
                        Авторизація
		 			</button>)}
                     {isRegistration && (
                         <button
                         className={style.btn}
                         type="button"
                         onClick={() => dispatch(logoutThunk())}
                        >вихід</button>)}
    </div>
  )
}

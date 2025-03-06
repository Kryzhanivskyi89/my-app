import React from 'react'
import style from './style.module.css'


export const AuthButton = ({children, onClick}) => {
        
    return (
        <button className={style.btn} type="button" onClick={onClick}>
           {children}
        </button>)
    
}

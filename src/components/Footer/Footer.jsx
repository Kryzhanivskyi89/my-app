import { NavLink, useNavigate } from "react-router-dom"
import axios from 'axios';
import { Notify } from 'notiflix';

import style from './style.module.css'

const Footer = () => {
    
    const handleSubmit = event => {
    event.preventDefault();
    const { imputEmail } = event.target.elements;

    const fetsh = async () => {
      await axios.patch('/users/subscribe', {
        inputEmail: imputEmail.value,
      });
    };
      
    if (imputEmail.value.length > 0) {
      try {
        fetsh();
        Notify.success(`${imputEmail.value} subscribe`);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

	return (
		<>
      <div className={style.navbar}>
        <form className={style.subscribeForm} onSubmit={handleSubmit}>
          <input
            className={style.input}
            name="imputEmail"
            type="email"
            placeholder="Enter your email address"
          />
                  
          <button className={style.btn} type="submit">Subscribe</button>
        </form>
                
      </div>
		</>
	)
}

export default Footer
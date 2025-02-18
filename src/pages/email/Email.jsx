import style from './style.module.css'
import {
    ukrnet,
    gmail,
    apple
} from '../../images/logo/index'

const Email = () => {
	return (
        <section className='container'>
            <ul className={style.list}>
                <li>
                    <a className={style.card} href="https://mail.ukr.net/desktop#msglist/f0/p0">Ukr.net
                        <img className={style.img__social} src={ukrnet} alt="ukrnet" /></a>
                    <p className={style.link_paragraph}>andrew.506@ukr.net</p>
                </li>
                <li>
                    <a className={style.card} href="https://mail.google.com/mail/u/0/?ogbl#inbox">Gmail
                        <img className={style.img__social} src={gmail} alt="gmail" /></a>
                    <p className={style.link_paragraph}>ecolog.506@gmail.com</p>
                </li>
                <li>
                    <a className={style.card} href="https://www.icloud.com/mail/">iCloud
                        <img className={style.img__social} src={apple} alt="apple" /></a>
                    <p className={style.link_paragraph}>andrew.506@icloud.com</p>
                </li>
                
            </ul>
        </section>

		
	)
}

export default Email
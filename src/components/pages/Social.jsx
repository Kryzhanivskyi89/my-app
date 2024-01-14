import style from './style.module.css'
import {
   facebook,
    linkedin,
    instagram,
    telegram  
} from '../../images/logo/index'

const Social = () => {
	return (
        <>
            <ul className={style.list}>
                <li >
                    <a className={style.card} href="https://www.linkedin.com/in/andrew-full-stack/">LinkedIn
                        <img className={style.img__social} src={linkedin} alt="linkedin" />
                    </a>
                    <p className={style.link_paragraph}>https://www.linkedin.com/in/andrew-full-stack/</p>
                </li>
                <li >
                    <a className={style.card} href="https://www.facebook.com/andriykryzhanivskyi/">Facebook
                        <img className={style.img__social} src={facebook} alt="facebook" />
                    </a>
                    <p className={style.link_paragraph}>https://www.facebook.com/andriykryzhanivskyi/</p>
                </li>
                <li >
                    <a className={style.card} href="https://www.instagram.com/andrii_krizhanivskyi/">Instagram
                        <img className={style.img__social} src={instagram} alt="instagram" />
                    </a>
                    <p className={style.link_paragraph}>https://www.instagram.com/andrii_krizhanivskyi/</p>
                </li>
                <li >
                    <a className={style.card} href="https://t.me/andrew_506">Telegram
                        <img className={style.img__social} src={telegram} alt="telegram" />
                    </a>
                    <p className={style.link_paragraph}>https://t.me/andrew_506</p>
                </li>
                <li><a href="https://www.youtube.com/@andrewecolog4426/featured">YouTube</a></li> 
                <li><a href="https://github.com/Kryzhanivskyi89">GitHub</a></li>
            </ul>
		</>
	)
}

export default Social


import styles from './style.module.css';

const Hero = () => {

	return (
		<section className={styles.hero} id="hero">
            <div className={styles.heroWrap}>
                <h1 className={styles.heroTitle}>Andrii Kryzhanivskyi</h1>
                <p className={styles.heroDescription}>Full Stack Developer</p>
                <p className={styles.heroDescription}>
                    (JavaScript/TypeScript, HTML/СSS, React/Next.js, Node.js/Express)
                </p>
                <a href="https://github.com/Kryzhanivskyi89" target='blank' className={styles.heroDescription}>github.com/Kryzhanivskyi89</a>
            </div>
        </section>
	)
}

export default Hero
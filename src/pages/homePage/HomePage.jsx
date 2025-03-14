
import { useEffect, useState } from 'react';
import clsx from 'clsx';

import data from '../../data/potfolio.json'
import styles from './style.module.css';


const HomePage = () => {

	const[portfolio, setPortfolio] = useState([])

	useEffect(() => {
        // Отримуємо базовий URL (локально це буде "", а на GitHub Pages - "/my-app")
        const basePath = process.env.PUBLIC_URL || "";

        // Додаємо правильний шлях до кожного зображення
        const updatedPortfolio = data.map(item => ({
            ...item,
            image: `${basePath}/images/portfolio/${item.image}`
        }));

        setPortfolio(updatedPortfolio);
    }, []);
	
	return (
		<section>
			<div className='container'>
				<div className=''>
				<h2 className={styles.portfolioTitle}>Portfolio</h2>
					<ul className={styles.portfolio} id="portfolio-list">
						{portfolio.map(({ title, image, src, technology, description }) => (
							<li className={styles.card} key={title}>                
								<a target="_blank" rel="noopener noreferrer" href={src} className={styles.cardLink}>
									<div className={clsx(styles.face1, styles.face)}>
										<div className={styles.content}>
											<picture>
												<source srcSet={image} type="image/webp" />
                                                <source srcSet={image} type="image/jpeg" />
                                                <img
													src={image} 
													crossOrigin="anonymous" 
													decoding="auto"
													className={styles.portfolioImage}
													alt={title}
												/>
											</picture>
										</div>
									</div>
									<div className={clsx(styles.face2, styles.face)}>
										<div className={styles.content}>
											<h3 className={styles.contentTitle}>{title}</h3>
											<div className={styles.descr}>
												<p>{technology}</p>
												<p>{description}</p>
											</div>
										</div>
									</div>
								</a>
							</li>        
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default HomePage

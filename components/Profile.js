import styles from '../styles/Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.paragraph}>I'm Biggs Thorarensen, a senior front end web developer based in Eastbourne. I've had over 20 years of experience building for the web. I approach projects armed with a hawkeye for details, unwavering attention to quality and a passion for excellent user experience.</p>
            </div>
            <div className={styles.image}>
                <img 
                    src="/biggs.png" 
                    alt="Biggs Thorarensen, a full-bearded white male looking up at the sky with trees in the background" 
                    width="500" 
                    height="500" 
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </div>
    )
}

export default Profile

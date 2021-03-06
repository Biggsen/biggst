import styles from '../styles/Profile.module.css'
import Image from 'next/image'

const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.paragraph}>I'm Biggs Thorarensen, a senior front end web developer based in London. I've had over 15 years of experience building for the web. I approach projects armed with a hawkeye for details, unwavering attention to quality and a passion for excellent user experience.</p>
            </div>
            <div className={styles.image}>
                <Image src="/profile.jpeg" alt="Biggs Thorarensen, a full-bearded white male with glasses wearing a black and white checkered striped shirt." width={500} height={500} />
            </div>
        </div>
    )
}

export default Profile

import styles from '../styles/Header.module.css'

const Header = ({title, subtitle}) => {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            {subtitle.length
                ? <h2 className={styles.subtitle}>{subtitle}</h2>
                : null
            }
        </div>
    )
}

export default Header

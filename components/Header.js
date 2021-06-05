import styles from '../styles/Header.module.css'

const Header = ({title, subtitle}) => {
    return (
        <div>
            <h1 className={styles.h1}>{title}</h1>
            {subtitle.length
                ? <h2 className={styles.h2}>{subtitle}</h2>
                : null
            }
        </div>
    )
}

export default Header

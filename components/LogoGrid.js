import styles from '../styles/LogoGrid.module.css'

const LogoGrid = ({ title, data }) => {
    return (
        <div>
            <h3 className={styles.heading}>{title}</h3>
            <ul className={styles.grid}>
                {data.map((logo) => (
                    <li className={styles.item}>
                        <img 
                            src={`/images/${logo.image}`} 
                            alt={logo.name} 
                            width="120" 
                            height="120" 
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default LogoGrid

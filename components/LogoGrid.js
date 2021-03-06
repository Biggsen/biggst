import styles from '../styles/LogoGrid.module.css'
import Image from 'next/image'

const LogoGrid = ({ title, data }) => {
    return (
        <div>
            <h3 className={styles.heading}>{title}</h3>
            <ul className={styles.grid}>
                {data.map((logo) => (
                    <li className={styles.item}>
                        <Image src={`/images/${logo.image}`} alt={logo.name} width={120} height={120} />
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default LogoGrid

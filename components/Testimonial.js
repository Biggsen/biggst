import styles from '../styles/Testimonial.module.css'

const Testimonial = () => {
    return (
        <div>
            <h3 className={styles.heading}>What they say about me</h3>
            <blockquote className={styles.blockquote}>
                "If you're looking for a world-class web developer then Biggs could well be your man. He's an absolute pleasure to work with and immediately understands not only the requirements of the project but also of the business as a whole.<br/><br/>Whilst he has a brilliant grasp of the technologies involved in web development he also manages to apply them pragmatically rather than with rigid dogma."</blockquote>
            <p className={styles.paragraph}>- Mark Wright, Executive Producer at R/GA</p>
            <br/>
            <blockquote className={styles.blockquote}>
                "If you’re in need of a London based front end dev with public sector and GDS experience, a great team working ethic, flexibility and a commitment to delivering a high quality experience for all of your users look no further than Biggs!"</blockquote>
            <p className={styles.paragraph}>- Andrew Sansom, Digital Product Manager at Department for Education</p>
        </div>
    )
}

export default Testimonial




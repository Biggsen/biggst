import Head from 'next/head'
import Header from '../components/Header'
import Profile from '../components/Profile'
import LogoGrid from '../components/LogoGrid'
import Testimonial from '../components/Testimonial'
import { builtFor } from '../data/builtFor'
import { workedFor } from '../data/workedFor'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.grid}>
      <Head>
        <title>Biggs Thorarensen - Senior Front End Web Developer. London, UK. HTML/CSS/JS/Web Accessibility.</title>
        <meta name="description" content="Biggs Thorarensen, Senior Front End Developer based in London." />
        <link rel="icon" href="/favicon.ico" />
        <link href="//fonts.googleapis.com/css?family=Rambla:400,700" rel="stylesheet" type="text/css" />
      </Head>
      <Header title="Biggs" subtitle="Senior Front End Developer" />
      <Profile />
      <LogoGrid title="I've built for" data={builtFor} />
      <LogoGrid title="I've worked for" data={workedFor} />
      <Testimonial />
      <div>
        <h3 className={styles.heading}>How to hire me</h3>
        <p className={styles.paragraph}>
          Email me at <a href="mailto:biggs@devillion.com">biggs@devillion.com</a><br />
          Tweet me at <a href="https://twitter.com/biggs_t" target="_blank">@biggs_t</a><br />
          Send me a message on <a href="//uk.linkedin.com/in/biggsthorarensen/" target="_blank">LinkedIn</a>
        </p>

        <h3 className={styles.heading}>Online CV</h3>
        <p className={styles.paragraph}>
        <a href="https://docs.google.com/document/d/1tItByB6kCq7_83ybumSa6-hiAhhFO6ELBQl1WeBxPf8/edit?usp=sharing" target="_blank">View my latest CV on Google Docs</a>
        </p>
      </div>
    </div>
  )
}

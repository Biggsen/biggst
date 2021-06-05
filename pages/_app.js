import Layout from '../components/Layout'
import Header from '../components/Header'
import Profile from '../components/Profile'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Profile />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

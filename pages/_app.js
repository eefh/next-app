import Layout from '../components/Layout';
import "@fontsource/noto-sans"
import "@fontsource/outfit/800.css"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

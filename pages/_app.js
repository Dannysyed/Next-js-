import Layout from '../components/navbar/Layout'
import './../styles/globals.css'
import Head from "next/head";
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>
// Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous" />
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </>
  )
}

export default MyApp

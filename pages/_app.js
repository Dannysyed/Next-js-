import Layout from '../components/navbar/Layout'
import './../styles/globals.css'
import Head from "next/head";
import Script from "next/script"
import Routecontext from '../store/routecontext';
import { useContext } from 'react';
import { NextResponse } from 'next/server'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  // let route=useRouter()
  // let con = useContext(Data_context)

  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous" />
      <Layout>
        <Routecontext>

          <Component {...pageProps} />
        </Routecontext>

      </Layout>
    </>
  )
}

export default MyApp

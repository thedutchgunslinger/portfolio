import '../styles/globals.scss'
import Head from "next/head";
import Link from "next/link";
import {AnimateSharedLayout} from 'framer-motion';


function MyApp({ Component, pageProps }) {

  return ( 
  <AnimateSharedLayout>
    <Component {...pageProps} />
  </AnimateSharedLayout>
  );
}

export default MyApp

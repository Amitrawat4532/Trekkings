import "react-calendar/dist/Calendar.css";
import "../styles/globals.css";
import "../styles/whatsappBtn.css";
// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/anton/400.css";
import "@fontsource/kanit";
import "@fontsource/rubik-glitch";
import "@fontsource/sen";
import "@fontsource/roboto";
import "@fontsource/raleway";
import "@fontsource/inter";
import "animate.css/animate.min.css";
import StartLoader from "../components/StartLoader";
import NextNProgress from 'nextjs-progressbar';


import React, { useEffect, useState } from "react";
import customTheme from "../theme/customTheme";
import Head from "next/head";

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnim(false);
    }, 2000);
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" 
        // content="width=device-width, initial-scale=1.0"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2"
        />
        <meta
          name="description"
          content="We provide eco-tourism activities for groups in the Igatpuri Hill Station region. Our goal is to bring people closer to nature, promote sustainability and ensure the preservation of our environment."
        />
        <meta
          name="keywords"
          content="Igatpuri , Igatpuri Hiking , Igatpuri Tourism , Igatpuri Travel , Nashik Tours & Travels , Nashik Maharashtra India "
        />
        <link rel="shortcut icon" href="/images/logo.png" />
        <title>IGATPURIHILLSTREKTOURISM</title>
      </Head>
      {startAnim && <StartLoader />}
      <NextNProgress options={{ showSpinner: false }} aria-valuemax="100" aria-valuemin="0" aria-valuenow="30" role="progressbar" class="css-1huyijp" />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

import "react-calendar/dist/Calendar.css";
import "../styles/globals.css";
import "../styles/whatsappBtn.css";
// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/anton/400.css";
import "@fontsource/kanit";
import "@fontsource/rubik-glitch";
import "@fontsource/sen";
import "animate.css/animate.min.css";
import StartLoader from "../components/StartLoader";

import React, { useEffect, useState } from "react";
import customTheme from "../theme/customTheme";

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  const [startAnim, setStartAnim] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStartAnim(false);
    }, 2000);
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      {startAnim && <StartLoader />}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

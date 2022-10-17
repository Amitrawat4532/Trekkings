// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/anton/400.css";
import "@fontsource/sen";

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button } from "./ButtonStyle";
import { TextStyle as Text } from "./TextStyle";

const customTheme = extendTheme({
  colors: {
    mainOrange: "#FF4417",
    mainWhite: "#FFFFFF",
    mainBlack: "#000000",
    secondaryText: "#3E3E3E",
  },
  components: {
    Button,
    Text,
  },
});

export default customTheme;

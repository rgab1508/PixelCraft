import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}
const theme = extendTheme({ config });

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.body
);
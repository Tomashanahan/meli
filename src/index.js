import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductsProvider } from "./Context/ProductsContext";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  // sm: '360px',
  sm: '375px',
  md: '400px',
  lg: '600px',
  xl: '1000px',
  '2xl': '1440px',
}

const colors = {
	black: "#000",
	transparentBlack: "rgba(0,0,0,0.55)",
	meliLigthYellow: "#7F793D",
	white: "#FFF",
	meliYellow: "#FFF059",
	melimediumhGray: "#363633",
	meliBlue: "#3483fa",
	meliLightBlue: "rgba(65,137,230,.15)",
	meliGray: "#333",
	meliLightGray: "#666",
	meliBlack: "#3C3B35",
	meliGreen: "#00a650",
	meliRed: "#F83535",
}

const theme = extendTheme({ breakpoints, colors })

ReactDOM.render(
	<React.StrictMode>
		<ProductsProvider>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</BrowserRouter>
		</ProductsProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

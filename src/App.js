import { Box } from "@chakra-ui/react";
// import "./App.css";

import Header from "./Components/Header/Header.jsx";
import Detail from "./Components/Product Detail/Detail";

function App() {
	return (
		<Box className="App" bg="#ECEDEC" pos="relative">
			<Header />
			<Detail />
		</Box>
	);
}

export default App;

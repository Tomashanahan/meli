import { Box } from "@chakra-ui/react";

import Header from "./Components/Header/Header.jsx";
import Detail from "./Components/Product Detail/Detail";
import { Routes, Route } from "react-router-dom";
import SearchedProduct from "./Components/SearchedProduct/SearchedProduct";

function App() {
	return (
		<Box className="App" bg="#ededed" pos="relative">
			<Header />
			<Routes>
				<Route exact path="/productDetail/:id" element={<Detail />} />
				<Route exact path="/searchedProducts" element={<SearchedProduct />} />
			</Routes>
		</Box>
	);
}

export default App;

import { Box } from "@chakra-ui/react";

import Header from "./Components/Header/Header.jsx";
import Detail from "./Components/Product Detail/Detail";
import { Routes, Route } from "react-router-dom";
import SearchedProduct from "./Components/SearchedProduct/SearchedProduct";

function App() {
	return (
		<Box className="App" bg="#ededed" pos="relative" pb="200px">
			<Header />
			<Routes>
				<Route exact path="/productDetail/:id" element={<Detail />} />
				<Route exact path="/searchedProducts" element={<SearchedProduct />} />
				<Route
					path="*"
					element={<SearchedProduct to="/searchedProducts" replace />}
				/>
			</Routes>
		</Box>
	);
}

export default App;

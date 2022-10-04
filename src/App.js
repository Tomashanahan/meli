import { Box } from "@chakra-ui/react";

import Header from "./Components/Header/Header.jsx";
import Detail from "./Components/Product Detail/Detail";
import {Routes, Route} from 'react-router-dom';
import SearchedProduct from './Components/SearchedProduct/SearchedProduct';

function App() {
	return (
		<Box className="App" bg="#ECEDEC" pos="relative">
			<Header />
			<Routes>
				<Route path="/productDetail" element={<Detail />} />
				<Route path="/searchedProducts" element={<SearchedProduct />} />
			</Routes>
		</Box>
	);
}

export default App;

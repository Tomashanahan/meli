import React, { useContext, useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { ProductsContext } from "../../Context/ProductsContext";
import { useNavigate } from "react-router-dom";

function SearchBar() {
	const { searchProduct, dispatch, cleanProductDetal, cleanSearchedProduct } =
		useContext(ProductsContext);
	const [searchInput, setSearchInput] = useState("");

	const navigation = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		if (searchInput !== "") {
			dispatch(searchProduct(searchInput));
			cleanProductDetal();
			cleanSearchedProduct();
			navigation("/searchedProducts");
		}
	};

	return (
		<Box mt="0px">
			<form
				onSubmit={handleSearch}
				style={{ position: "relative", width: "90%", height: "41px" }}
			>
				<Input
					padding="12px 60px 12px 15px"
					width="90%"
					_focus={{ outline: "none" }}
					border="none"
					background-color="#ffffff"
					fontSize="15px"
					line-height="12px"
					box-shadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
					type="text"
					placeholder="Buscar productos, marcas y más..."
					_placeholder={{ color: "#BFBFBF" }}
					boxShadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<Button
					border="none"
					bg="#FFFF"
					type="submit"
					position="absolute"
					top="25%"
					cursor="pointer"
					right="-14px"
					borderLeft=" 1px solid #E6E6E6"
					height="20px"
					color="rgba(0,0,0,0.55)"
					fontSize="21px"
					px="12px"
				>
					<IoIosSearch />
				</Button>
			</form>
		</Box>
	);
}

export default SearchBar;

import React, { useContext, useEffect, useRef, useState } from "react";
import { Flex, Box, Stack, useMediaQuery } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ProductsContext } from "../../Context/ProductsContext";
import { Link, useSearchParams } from "react-router-dom";
import FiltersModal from "../FiltersModal/FiltersModal";
import SearchedProductMovile from "../Responsive/SearchedProductMovile/SearchedProductMovile";
import Pagination from "../Pagination/Pagination";
import SearchedProductfilters from "../SearchedProductfilters/SearchedProductfilters";
import SearchedProductNotfound from "../SearchedProductNotfound/SearchedProductNotfound";
import SearchedProductResults from "../SearchedProductResults/SearchedProductResults";
import SearchedProductSorts from "../SearchedProductSorts/SearchedProductSorts";

function SearchedProduct() {
	const {
		searchedProduct,
		dispatch,
		sortProductsSearched,
		filterProductsSearched,
	} = useContext(ProductsContext);
	const filterMenu = useRef();
	const [openFilterMenu, setOpenFilterMenu] = useState(false);
	const [sortSelection, setSortSelection] = useState("relevance");
	const [showAllfilters, setShowAllfilters] = useState(false);
	const [filterName, setFilterName] = useState("");
	const [params, setParams] = useSearchParams();
	const [isMobile] = useMediaQuery("(max-width: 794px)");

	const formatPrice = (number) => {
		return new Intl.NumberFormat("de-DE", {
			maximumSignificantDigits: 10,
		}).format(number);
	};

	const calculateDiscount = (price, originalPrice) => {
		const diference = originalPrice - price;
		return Math.ceil((diference * 100) / originalPrice);
	};

	const addFilterQuerysToParams = (q, filterNameID, id, name) => {
		let localStorageFilters = localStorage.getItem("filterNames");
		localStorageFilters === null
			? localStorage.setItem(
					"filterNames",
					JSON.stringify([{ name, filterNameID }])
			  )
			: localStorage.setItem(
					"filterNames",
					JSON.stringify([
						...JSON.parse(localStorageFilters),
						{ name, filterNameID },
					])
			  );
		const query = params.get("query");

		if (query) {
			params.set(filterNameID, id);
			setParams(params);
		} else {
			params.set("q", q);
			params.set(filterNameID, id);
			setParams(params);
		}
	};

	const deleteFilter = (filterName) => {
		let localStorageFilters = localStorage.getItem("filterNames");
		let newFilters = JSON.parse(localStorageFilters).filter(
			(e) => e.filterNameID !== filterName
		);
		localStorage.setItem("filterNames", JSON.stringify(newFilters));
		params.delete(filterName);
		setParams(params);
	};

	const addSortQuerysToParams = (sortID) => {
		params.set("sort", sortID);
		setParams(params);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(filterProductsSearched(window.location.search));
		sortProductsSearched(window.location.search);
	}, [params]);

	useEffect(() => {
		window.addEventListener("click", handleMenuFilterClick);

		function handleMenuFilterClick(e) {
			if (!filterMenu.current.contains(e.target)) {
				setOpenFilterMenu(false);
			}
		}
		return () => {
			window.removeEventListener("click", handleMenuFilterClick);
		};
	}, []);

	return (
		<>
			{showAllfilters && (
				<FiltersModal
					setShowAllfilters={setShowAllfilters}
					addFilterQuerysToParams={addFilterQuerysToParams}
					searchedProduct={searchedProduct?.available_filters}
					filterName={filterName}
					filterProductsSearched={filterProductsSearched}
					query={searchedProduct?.query}
					dispatch={dispatch}
				/>
			)}
			{searchedProduct?.results?.length > 0 ? (
				<Flex w="82%" m="auto" justify="space-between" mt="32px">
					{isMobile ? (
						<SearchedProductMovile
							formatPrice={formatPrice}
							addFilterQuerysToParams={addFilterQuerysToParams}
							addSortQuerysToParams={addSortQuerysToParams}
							calculateDiscount={calculateDiscount}
							setShowAllfilters={setShowAllfilters}
							deleteFilter={deleteFilter}
							setFilterName={setFilterName}
							params={params}
							filterProductsSearched={filterProductsSearched}
							dispatch={dispatch}
						/>
					) : (
						<>
							<Stack>
								<Stack>
									<Text
										mb="0"
										fontSize="26px"
										fontWeight={600}
										textTransform="capitalize"
										color="black"
										w="70%"
									>
										{searchedProduct?.query}
									</Text>
									<Text
										w="50%"
										style={{ margin: 0 }}
										color="meliGray"
										fontWeight={300}
									>
										{formatPrice(searchedProduct?.paging?.total)} resultados
									</Text>
									<Flex flexWrap="wrap" w="20em">
										{JSON.parse(localStorage.getItem("filterNames"))?.map(
											(e, i) => (
												<Box
													fontSize="13px"
													key={i}
													mb="10px"
													p="5px"
													mr="10px"
													color="rgba(0,0,0,.62)"
													bg="white"
												>
													{e.name}{" "}
													<Text
														as="span"
														cursor="pointer"
														color="#bfbfbf"
														onClick={() => deleteFilter(e.filterNameID)}
													>
														X
													</Text>
												</Box>
											)
										)}
									</Flex>
								</Stack>
								{searchedProduct?.available_filters?.map(
									(searchedProductFilters) => {
										let filterNameID = searchedProductFilters.id;
										return (
											<SearchedProductfilters
												key={filterNameID}
												formatPrice={formatPrice}
												addFilterQuerysToParams={addFilterQuerysToParams}
												setFilterName={setFilterName}
												setShowAllfilters={setShowAllfilters}
												{...searchedProductFilters}
												filterNameID={filterNameID}
												searchedProductQuery={searchedProduct?.query}
											/>
										);
									}
								)}
							</Stack>
							<Box w="75%" mb="50px">
								<Flex justify="flex-end">
									<Text
										as="span"
										color="meliGray"
										mr="6px"
										fontWeight={600}
										fontSize="16px"
									>
										Ordenar por
									</Text>
									<SearchedProductSorts
										setOpenFilterMenu={setOpenFilterMenu}
										setSortSelection={setSortSelection}
										addSortQuerysToParams={addSortQuerysToParams}
										filterMenu={filterMenu}
										openFilterMenu={openFilterMenu}
										sortSelection={sortSelection}
									/>
								</Flex>
								<Stack
									w="100%"
									bg="white"
									mt="24px"
									boxShadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
									borderRadius="5px"
								>
									{searchedProduct?.results?.map((searchedProductResult) => {
										return (
											<Link
												to={`/productDetail/${searchedProductResult.id}`}
												key={searchedProductResult.id}
												style={{ textDecoration: "none" }}
											>
												<SearchedProductResults
													formatPrice={formatPrice}
													calculateDiscount={calculateDiscount}
													{...searchedProductResult}
												/>
											</Link>
										);
									})}
								</Stack>
								<Pagination />
							</Box>
						</>
					)}
				</Flex>
			) : searchedProduct?.results?.length === 0 ? (
				<SearchedProductNotfound />
			) : (
				<Box
					bg="white"
					h={searchedProduct?.results?.length === 0 ? "100%" : "100vh"}
				/>
			)}
		</>
	);
}

export default SearchedProduct;

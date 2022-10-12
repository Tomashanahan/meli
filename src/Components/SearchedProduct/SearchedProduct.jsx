import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Flex,
	Box,
	Stack,
	Image,
	UnorderedList,
	ListItem,
	useMediaQuery,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { ProductsContext } from "../../Context/ProductsContext";
import { Link, useSearchParams } from "react-router-dom";
import FiltersModal from "../FiltersModal/FiltersModal";
import SearchedProductMovile from "../Responsive/SearchedProductMovile/SearchedProductMovile";
import Pagination from "../Pagination/Pagination";
import SearchedProductfilters from "../SearchedProductfilters/SearchedProductfilters";
import SearchedProductNotfound from "../SearchedProductNotfound/SearchedProductNotfound";

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
					searchedProduct={searchedProduct?.available_filters}
					filterName={filterName}
					setShowAllfilters={setShowAllfilters}
					filterProductsSearched={filterProductsSearched}
					query={searchedProduct?.query}
					dispatch={dispatch}
					addFilterQuerysToParams={addFilterQuerysToParams}
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
							params={params}
							deleteFilter={deleteFilter}
							filterProductsSearched={filterProductsSearched}
							dispatch={dispatch}
							setFilterName={setFilterName}
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
												{...searchedProductFilters}
												filterNameID={filterNameID}
												formatPrice={formatPrice}
												addFilterQuerysToParams={addFilterQuerysToParams}
												setFilterName={setFilterName}
												setShowAllfilters={setShowAllfilters}
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
									<Flex align="center" _hover={{ color: "meliBlue" }}>
										<Box
											pos="relative"
											fontSize="14px"
											cursor="pointer"
											color="black"
											mr="5px"
											ref={filterMenu}
										>
											<Box onClick={() => setOpenFilterMenu(!openFilterMenu)}>
												{sortSelection === "relevance"
													? "Más relevantes"
													: sortSelection === "price_asc"
													? "Menor precio"
													: "Mayor precio"}
											</Box>
											{openFilterMenu && (
												<Stack
													pos="absolute"
													top="130%"
													bg="white"
													color="meliLightGray"
													w="135px"
													h="122px"
													boxShadow="0 1px 2px 0 rgb(0 0 0 / 32%)"
													borderRadius="6px"
												>
													<Flex
														style={{ margin: 0 }}
														borderLeft={
															sortSelection === "relevance" &&
															"5px solid meliBlue"
														}
														borderTopLeftRadius="6px"
														color={
															sortSelection === "relevance"
																? "meliBlue"
																: "meliLightGray"
														}
														fontWeight={
															sortSelection === "relevance" ? 600 : 300
														}
														align="center"
														fontSize="14px"
														p="10px"
														pl="16px"
														h="40px"
														borderBottom="1px solid #d8d8d8"
														onClick={() => {
															setSortSelection("relevance");
															setOpenFilterMenu(false);
															addSortQuerysToParams("relevance");
														}}
													>
														Más relevantes
													</Flex>
													<Flex
														style={{ margin: 0 }}
														align="center"
														fontSize="14px"
														p="10px"
														pl="16px"
														color={
															sortSelection === "price_asc"
																? "meliBlue"
																: "meliLightGray"
														}
														h="40px"
														fontWeight={
															sortSelection === "price_asc" ? 600 : 300
														}
														borderLeft={
															sortSelection === "price_asc" &&
															"5px solid meliBlue"
														}
														borderBottom="1px solid #d8d8d8"
														onClick={() => {
															setSortSelection("price_asc");
															setOpenFilterMenu(false);
															addSortQuerysToParams("price_asc");
														}}
													>
														Menor precio
													</Flex>
													<Flex
														style={{ margin: 0 }}
														align="center"
														fontSize="14px"
														color={
															sortSelection === "price_desc"
																? "meliBlue"
																: "meliLightGray"
														}
														p="10px"
														pl="16px"
														h="40px"
														fontWeight={
															sortSelection === "price_desc" ? 600 : 300
														}
														borderLeft={
															sortSelection === "price_desc" &&
															"5px solid meliBlue"
														}
														onClick={() => {
															setSortSelection("price_desc");
															setOpenFilterMenu(false);
															addSortQuerysToParams("price_desc");
														}}
													>
														Mayor precio
													</Flex>
												</Stack>
											)}
										</Box>
										<Box color="meliBlue" mt="5px">
											<IoIosArrowDown />
										</Box>
									</Flex>
								</Flex>
								<Stack
									w="100%"
									bg="white"
									mt="24px"
									boxShadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
									borderRadius="5px"
								>
									{searchedProduct?.results?.map(
										({
											thumbnail,
											title,
											id,
											shipping,
											currency_id,
											price,
											original_price,
										}) => {
											return (
												<Link
													to={`/productDetail/${id}`}
													key={id}
													style={{ textDecoration: "none" }}
												>
													<Flex px="24px" pb="24px" p="20px 50px 20px 0">
														<Box w="160px" px="24px">
															<Image
																w="160px"
																h="160px"
																objectFit="contain"
																src={thumbnail}
															/>
														</Box>
														<Box w="100%">
															<Text
																m="0"
																color="meliGray"
																fontSize="20px"
																fontWeight={300}
															>
																{title}
															</Text>
															<Flex
																justify="space-between"
																w="70%"
																align="center"
															>
																{original_price ? (
																	<>
																		<Box mt="10px">
																			<Box
																				fontSize="12px"
																				mb="-8px"
																				textDecor="line-through"
																				color="rgba(0,0,0,.55)"
																				fontWeight={400}
																			>
																				$ {formatPrice(original_price)}
																			</Box>
																			<Text
																				fontWeight={400}
																				fontSize="24px"
																				m="0"
																				mt="10px"
																				color="black"
																			>
																				{currency_id === "USD" ? "U$S" : "$"}{" "}
																				{formatPrice(price)}{" "}
																				<Text
																					as="span"
																					color="meliGreen"
																					fontWeight={400}
																					fontSize="14px"
																				>
																					{calculateDiscount(
																						price,
																						original_price
																					)}
																					% OFF
																				</Text>
																			</Text>
																			{shipping?.free_shipping && (
																				<Text
																					color="meliGreen"
																					fontWeight={600}
																					fontSize="14px"
																					m="0"
																				>
																					Envío gratis
																				</Text>
																			)}
																		</Box>
																		<Box pt="19px">
																			<Flex align="flex-end" color="meliBlue">
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiFillStar />
																				</Box>
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiFillStar />
																				</Box>
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiFillStar />
																				</Box>
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiFillStar />
																				</Box>
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiOutlineStar />
																				</Box>
																				<Box
																					fontSize="13px"
																					color="meliGray"
																					w="16px"
																					h="16px"
																					minW="50px"
																					mr="7px"
																				>
																					1397
																				</Box>
																			</Flex>
																		</Box>
																	</>
																) : (
																	<>
																		<Box>
																			<Box
																				fontWeight={400}
																				fontSize="24px"
																				m="0"
																				mt="10px"
																				color="black"
																			>
																				{currency_id === "USD" ? "U$S" : "$"}{" "}
																				{formatPrice(price)}{" "}
																			</Box>
																			{shipping?.free_shipping && (
																				<Text
																					color="meliGreen"
																					fontWeight={600}
																					fontSize="14px"
																					m="0"
																				>
																					Envío gratis
																				</Text>
																			)}
																		</Box>
																		<Box pt="19px">
																			<Flex align="flex-end" color="meliBlue">
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiFillStar />
																				</Box>
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiFillStar />
																				</Box>
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiFillStar />
																				</Box>
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiFillStar />
																				</Box>
																				<Box
																					fontSize="16px"
																					w="16px"
																					h="16px"
																					mr="7px"
																				>
																					<AiOutlineStar />
																				</Box>
																				<Box
																					fontSize="13px"
																					color="meliGray"
																					w="16px"
																					h="16px"
																					minW="50px"
																					mr="7px"
																				>
																					1397
																				</Box>
																			</Flex>
																		</Box>
																	</>
																)}
															</Flex>
														</Box>
													</Flex>
													<Box w="100%" borderBottom="thin solid #eee" />
												</Link>
											);
										}
									)}
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

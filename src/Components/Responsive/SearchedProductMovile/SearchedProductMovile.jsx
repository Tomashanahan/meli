import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Flex,
	Box,
	Stack,
	Image,
	UnorderedList,
	ListItem,
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuGroup,
	MenuItem,
	MenuDivider,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ProductsContext } from "../../../Context/ProductsContext";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

function SearchedProductMovile({
	deleteFilter,
	formatPrice,
	addFilterQuerysToParams,
	addSortQuerysToParams,
	calculateDiscount,
	filterProductsSearched,
	dispatch,
	setShowAllfilters,
	setFilterName,
	params,
}) {
	const { searchedProduct } = useContext(ProductsContext);
	const filterMenu = useRef();
	const [openFilterMenu, setOpenFilterMenu] = useState(false);
	const [sortSelection, setSortSelection] = useState("relevance");

	return (
		<>
			<Flex w="100%" pos="relative" m="auto" justify="space-between" mt="32px">
				<Box pos="absolute" top="0">
					<Menu>
						<MenuButton colorScheme="none" color="black" textDecor="underline">
							Filtros
						</MenuButton>
						<MenuList
							color="black"
							p="10px"
							h="400px"
							overflowY="scroll"
							boxShadow="0 1px 2px 0 rgb(0 0 0 / 45%)"
							w="80%"
							ml="20px"
						>
							<MenuGroup>
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
													color="white"
													bg="meliLightGray"
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
							</MenuGroup>
							<MenuGroup>
								{searchedProduct?.available_filters?.map(
									({ id, name, values }) => {
										let filterNameID = id;
										return (
											<Box key={id}>
												<Text
													color="meliGray"
													fontSize="16px"
													fontWeight={600}
													mt="30px"
													mb="10px"
													onClick={() => {
														window.scrollTo(0, 0);
														dispatch(
															filterProductsSearched(
																searchedProduct?.query,
																filterNameID,
																id,
																name
															)
														);
													}}
													lineHeight={1.25}
												>
													{name}
												</Text>
												{values?.length > 9
													? values
															?.slice(0, 9)
															?.map(({ id, name, results }) => (
																<Text
																	key={id}
																	color="meliLightGray"
																	cursor="pointer"
																	fontSize="14px"
																	fontWeight={400}
																	m="0 0 6px"
																	onClick={(e) => {
																		e.preventDefault();
																		window.scrollTo(0, 0);
																		addFilterQuerysToParams(
																			searchedProduct?.query,
																			filterNameID,
																			id,
																			name
																		);
																	}}
																>
																	{name}{" "}
																	<Text as="span" color="#999">
																		({formatPrice(results)})
																	</Text>
																</Text>
															))
													: values?.map(({ id, name, results }) => (
															<Link
																key={id}
																to={`/searchedProducts?${params}`}
																onClick={(e) => {
																	e.preventDefault();
																	addFilterQuerysToParams(
																		searchedProduct?.query,
																		filterNameID,
																		id,
																		name
																	);
																}}
																style={{ width: "30%" }}
															>
																<Text
																	color="meliLightGray"
																	cursor="pointer"
																	fontSize="14px"
																	fontWeight={400}
																	m="0 0 6px"
																>
																	{name}{" "}
																	<Text as="span" color="#999">
																		({formatPrice(results)})
																	</Text>
																</Text>
															</Link>
													  ))}
												{values?.length > 9 && (
													<Text
														as="span"
														color="meliBlue"
														fontWeight={400}
														id={name}
														onClick={(e) => {
															window.scrollTo(0, 0);
															setFilterName(name);
															setShowAllfilters(true);
															console.log("aaaaa")
														}}
														cursor="pointer"
													>
														Mostrar más
													</Text>
												)}
											</Box>
										);
									}
								)}
								<MenuDivider />
							</MenuGroup>
						</MenuList>
					</Menu>
				</Box>
				<Box w="100%" mb="50px">
					<Flex justify="flex-end">
						<Text
							as="span"
							color="meliGray"
							mr="6px"
							fontWeight={600}
							fontSize="14px"
						>
							Ordenar por
						</Text>
						<Flex align="center" _hover={{ color: "meliBlue" }}>
							<Box
								pos="relative"
								fontSize="12px"
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
												sortSelection === "relevance" && "5px solid meliBlue"
											}
											borderTopLeftRadius="6px"
											color={
												sortSelection === "relevance"
													? "meliBlue"
													: "meliLightGray"
											}
											fontWeight={sortSelection === "relevance" ? 600 : 300}
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
											fontWeight={sortSelection === "price_asc" ? 600 : 300}
											borderLeft={
												sortSelection === "price_asc" && "5px solid meliBlue"
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
											fontWeight={sortSelection === "price_desc" ? 600 : 300}
											borderLeft={
												sortSelection === "price_desc" && "5px solid meliBlue"
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
										<Flex
											pr="10px"
											pb="24px"
											pt="20px" /* p="20px 50px 20px 0" */
										>
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
													fontSize="12px"
													fontWeight={300}
												>
													{title}
												</Text>
												<Flex justify="space-between" w="100%" align="center">
													{original_price ? (
														<>
															<Box mt="10px">
																<Box
																	fontSize="10px"
																	mb="-8px"
																	textDecor="line-through"
																	color="rgba(0,0,0,.55)"
																	fontWeight={400}
																>
																	$ {formatPrice(original_price)}
																</Box>
																<Text
																	fontWeight={400}
																	fontSize="20px"
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
																		fontSize="10px"
																	>
																		{calculateDiscount(price, original_price)}%
																		OFF
																	</Text>
																</Text>
																{shipping?.free_shipping && (
																	<Text
																		color="meliGreen"
																		fontWeight={600}
																		fontSize="10px"
																		m="0"
																	>
																		Envío gratis
																	</Text>
																)}
															</Box>
														</>
													) : (
														<>
															<Box>
																<Box
																	fontWeight={400}
																	fontSize="20px"
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
																		fontSize="10px"
																		m="0"
																	>
																		Envío gratis
																	</Text>
																)}
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
				</Box>
			</Flex>
		</>
	);
}
export default SearchedProductMovile;
/* 🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸🎸 */

// {/* <Stack> */}
// {/* <Stack>
// 	<Text
// 		mb="0"
// 		fontSize="26px"
// 		fontWeight={600}
// 		textTransform="capitalize"
// 		color="black"
// 		w="70%"
// 	>
// 		{searchedProduct?.query}
// 	</Text>
// 	<Text w="50%" style={{ margin: 0 }} color="meliGray" fontWeight={300}>
// 		{formatPrice(searchedProduct?.paging?.total)} resultados
// 	</Text>
// 	<Flex flexWrap="wrap" w="20em">
// 		{JSON.parse(localStorage.getItem("filterNames"))?.map((e, i) => (
// 			<Box
// 				fontSize="13px"
// 				key={i}
// 				mb="10px"
// 				p="5px"
// 				mr="10px"
// 				color="rgba(0,0,0,.62)"
// 				bg="white"
// 			>
// 				{e.name}{" "}
// 				<Text
// 					as="span"
// 					cursor="pointer"
// 					color="#bfbfbf"
// 					onClick={() => deleteFilter(e.filterNameID)}
// 				>
// 					X
// 				</Text>
// 			</Box>
// 		))}
// 	</Flex>
// </Stack> */}
// </Stack>;

// {searchedProduct?.available_filters?.map(({ id, name, values }) => {
// 	let filterNameID = id;
// 	return (
// 		<Box key={id}>
// 			<Text
// 				color="meliGray"
// 				fontSize="16px"
// 				fontWeight={600}
// 				mt="30px"
// 				mb="10px"
// 				// onClick={() => {
// 				// 	window.scrollTo(0, 0);
// 				// 	dispatch(
// 				// 		filterProductsSearched(
// 				// 			searchedProduct?.query,
// 				// 			filterNameID,
// 				// 			id,
// 				// 			name
// 				// 		)
// 				// 	);
// 				// }}
// 				lineHeight={1.25}
// 			>
// 				{name}
// 			</Text>
// 			{values?.length > 9
// 				? values?.slice(0, 9)?.map(({ id, name, results }) => (
// 						<Text
// 							key={id}
// 							color="meliLightGray"
// 							cursor="pointer"
// 							fontSize="14px"
// 							fontWeight={400}
// 							m="0 0 6px"
// 							onClick={(e) => {
// 								e.preventDefault();
// 								window.scrollTo(0, 0);
// 								addFilterQuerysToParams(
// 									searchedProduct?.query,
// 									filterNameID,
// 									id,
// 									name
// 								);
// 							}}
// 						>
// 							{name}{" "}
// 							<Text as="span" color="#999">
// 								({formatPrice(results)})
// 							</Text>
// 						</Text>
// 				  ))
// 				: values?.map(({ id, name, results }) => (
// 						<Link
// 							key={id}
// 							to={`/searchedProducts?${params}`}
// 							onClick={(e) => {
// 								e.preventDefault();
// 								addFilterQuerysToParams(
// 									searchedProduct?.query,
// 									filterNameID,
// 									id,
// 									name
// 								);
// 							}}
// 							style={{ width: "30%" }}
// 						>
// 							<Text
// 								color="meliLightGray"
// 								cursor="pointer"
// 								fontSize="14px"
// 								fontWeight={400}
// 								m="0 0 6px"
// 							>
// 								{name}{" "}
// 								<Text as="span" color="#999">
// 									({formatPrice(results)})
// 								</Text>
// 							</Text>
// 						</Link>
// 				  ))}
// 			{values?.length > 9 && (
// 				<Text
// 					as="span"
// 					color="meliBlue"
// 					fontWeight={400}
// 					id={name}
// 					onClick={(e) => {
// 						window.scrollTo(0, 0);
// 						setFilterName(name);
// 						setShowAllfilters(true);
// 					}}
// 					cursor="pointer"
// 				>
// 					Mostrar más
// 				</Text>
// 			)}
// 		</Box>
// 	);
// })}

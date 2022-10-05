import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Flex,
	Box,
	Stack,
	Image,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { ProductsContext } from "../../Context/ProductsContext";
import { Link } from "react-router-dom";
import FiltersModal from "../FiltersModal/FiltersModal";

function SearchedProduct() {
	const { searchedProduct, sortProductsSearched } = useContext(ProductsContext);
	const filterMenu = useRef();
	const [openFilterMenu, setOpenFilterMenu] = useState(false);
	const [sortSelection, setSortSelection] = useState("relevance");
	const [showAllfilters, setShowAllfilters] = useState(false);
	const [filterName, setFilterName] = useState("");

	const formatPrice = (number) => {
		return new Intl.NumberFormat("de-DE", {
			maximumSignificantDigits: 10,
		}).format(number);
	};

	const calculateDiscount = (price, originalPrice) => {
		const diference = originalPrice - price;
		return Math.ceil((diference * 100) / originalPrice);
	};

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
				/>
			)}
			{searchedProduct?.results?.length > 0 ? (
				<Flex w="82%" m="auto" justify="space-between" mt="32px">
					<Stack>
						<Text
							mb="0"
							fontSize="26px"
							fontWeight={600}
							textTransform="capitalize"
							w="70%"
						>
							{searchedProduct?.query}
						</Text>
						<Text style={{ margin: 0 }} color="#333" fontWeight={300}>
							{formatPrice(searchedProduct?.paging?.total)} resultados
						</Text>
						{searchedProduct?.available_filters?.map(({ id, name, values }) => (
							<Box key={id}>
								<Text
									color="#333"
									fontSize="16px"
									fontWeight={600}
									mb="10px"
									lineHeight={1.25}
								>
									{name}
								</Text>
								{values?.length > 9
									? values?.slice(0, 9)?.map(({ id, name, results }) => (
											<Text
												key={id}
												color="#666"
												fontSize="14px"
												fontWeight={400}
												m="0 0 6px"
											>
												{name}{" "}
												<Text as="span" color="#999">
													({formatPrice(results)})
												</Text>
											</Text>
									  ))
									: values?.map(({ id, name, results }) => (
											<Text
												key={id}
												color="#666"
												fontSize="14px"
												fontWeight={400}
												m="0 0 6px"
											>
												{name}{" "}
												<Text as="span" color="#999">
													({formatPrice(results)})
												</Text>
											</Text>
									  ))}
								{values?.length > 9 && (
									<Text
										as="span"
										color="#3483fa"
										fontWeight={400}
										id={name}
										onClick={(e) => {
											setFilterName(name);
											setShowAllfilters(true);
										}}
										cursor="pointer"
									>
										Mostrar más
									</Text>
								)}
							</Box>
						))}
					</Stack>
					<Box w="75%" mb="50px">
						<Flex justify="flex-end">
							<Text
								as="span"
								color="#333"
								mr="6px"
								mt="2px"
								fontWeight={600}
								fontSize="16px"
							>
								Ordenar por
							</Text>
							<Flex align="center" _hover={{ color: "#3483fa" }}>
								<Box
									pos="relative"
									fontSize="14px"
									cursor="pointer"
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
											bg="#FFFF"
											color="#666"
											w="135px"
											h="135px"
											boxShadow="0 1px 2px 0 rgb(0 0 0 / 12%)"
											borderRadius="6px"
										>
											<Flex
												style={{ margin: 0 }}
												borderLeft={
													sortSelection === "relevance" && "5px solid #3483fa"
												}
												borderTopLeftRadius="6px"
												color={
													sortSelection === "relevance" ? "#3483fa" : "#666"
												}
												fontWeight={sortSelection === "relevance" ? 600 : 300}
												align="center"
												fontSize="14px"
												p="10px"
												h="40px"
												borderBottom="1px solid #d8d8d8"
												onClick={() => {
													setSortSelection("relevance");
													setOpenFilterMenu(false);
													sortProductsSearched(
														searchedProduct?.query,
														"relevance"
													);
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
													sortSelection === "price_asc" ? "#3483fa" : "#666"
												}
												h="40px"
												fontWeight={sortSelection === "price_asc" ? 600 : 300}
												borderLeft={
													sortSelection === "price_asc" && "5px solid #3483fa"
												}
												borderBottom="1px solid #d8d8d8"
												onClick={() => {
													setSortSelection("price_asc");
													setOpenFilterMenu(false);
													sortProductsSearched(
														searchedProduct?.query,
														"price_asc"
													);
												}}
											>
												Menor precio
											</Flex>
											<Flex
												style={{ margin: 0 }}
												align="center"
												fontSize="14px"
												color={
													sortSelection === "price_desc" ? "#3483fa" : "#666"
												}
												p="10px"
												pl="16px"
												h="40px"
												fontWeight={sortSelection === "price_desc" ? 600 : 300}
												borderLeft={
													sortSelection === "price_desc" && "5px solid #3483fa"
												}
												borderBottom="1px solid #d8d8d8"
												onClick={() => {
													setSortSelection("price_desc");
													setOpenFilterMenu(false);
													sortProductsSearched(
														searchedProduct?.query,
														"price_desc"
													);
												}}
											>
												Mayor precio
											</Flex>
										</Stack>
									)}
								</Box>
								<Box color="#3483fa" mt="5px">
									<IoIosArrowDown />
								</Box>
							</Flex>
						</Flex>
						<Stack
							w="100%"
							bg="#FFFF"
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
														color="#333"
														fontSize="20px"
														fontWeight={300}
													>
														{title}
													</Text>
													<Flex justify="space-between" w="70%" align="center">
														{original_price ? (
															<>
																<Box>
																	<Box
																		fontSize="16px"
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
																		color="#000"
																	>
																		$ {formatPrice(price)}{" "}
																		<Text
																			as="span"
																			color="#00a650"
																			fontWeight={400}
																			fontSize="14px"
																		>
																			{calculateDiscount(price, original_price)}
																			% OFF
																		</Text>
																	</Text>
																	{shipping?.free_shipping && (
																		<Text
																			color="#00a650"
																			fontWeight={600}
																			fontSize="14px"
																			m="0"
																		>
																			Envío gratis
																		</Text>
																	)}
																</Box>
																<Box pt="19px">
																	<Flex align="flex-end" color="#3483fa">
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
																			color="#333"
																			w="16px"
																			h="16px"
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
																		color="#000"
																	>
																		$ {formatPrice(price)}{" "}
																	</Box>
																	{shipping?.free_shipping && (
																		<Text
																			color="#00a650"
																			fontWeight={600}
																			fontSize="14px"
																			m="0"
																		>
																			Envío gratis
																		</Text>
																	)}
																</Box>
																<Box pt="19px">
																	<Flex align="flex-end" color="#3483fa">
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
																			color="#333"
																			w="16px"
																			h="16px"
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
					</Box>
				</Flex>
			) : (
				<Flex justify="center" align="center" mt="40px">
					<Box w="70%" textAlign="center" bg="#FFFF" p="20px">
						<Box fontSize="24px" fontWeight={600}>
							No hay publicaciones que coincidan con tu búsqueda.
						</Box>
						<UnorderedList w="50%" textAlign="left" m="auto" my="20px">
							<ListItem>Revisá la ortografía de la palabra.</ListItem>
							<ListItem>
								Utilizá palabras más genéricas o menos palabras.
							</ListItem>
							<ListItem>
								Navegá por las categorías para encontrar un producto similar
							</ListItem>
						</UnorderedList>
					</Box>
				</Flex>
			)}
		</>
	);
}

export default SearchedProduct;

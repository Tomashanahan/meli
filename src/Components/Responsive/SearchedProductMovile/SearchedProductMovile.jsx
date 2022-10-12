import React, { useContext, useRef, useState } from "react";
import {
	Flex,
	Box,
	Stack,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuGroup,
	MenuDivider,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ProductsContext } from "../../../Context/ProductsContext";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Pagination from "../../Pagination/Pagination";
import SearchedProductfilters from "../../SearchedProductfilters/SearchedProductfilters";
import SearchedProductResults from "../../SearchedProductResults/SearchedProductResults";
import SearchedProductSorts from "../../SearchedProductSorts/SearchedProductSorts";

function SearchedProductMovile({
	deleteFilter,
	formatPrice,
	addFilterQuerysToParams,
	addSortQuerysToParams,
	calculateDiscount,
	setShowAllfilters,
	setFilterName,
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
								<SearchedProductResults
									{...searchedProductResult}
									formatPrice={formatPrice}
									calculateDiscount={calculateDiscount}
								/>
							);
						})}
					</Stack>
					<Pagination />
				</Box>
			</Flex>
		</>
	);
}
export default SearchedProductMovile;

import React from "react";
import { Flex, Box, Stack } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

function SearchedProductSorts({
	filterMenu,
	setOpenFilterMenu,
	openFilterMenu,
	sortSelection,
	setSortSelection,
	addSortQuerysToParams,
}) {
	return (
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
							borderLeft={sortSelection === "relevance" && "5px solid #3483fa"}
							borderTopLeftRadius="6px"
							color={
								sortSelection === "relevance" ? "meliBlue" : "meliLightGray"
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
								sortSelection === "price_asc" ? "meliBlue" : "meliLightGray"
							}
							h="40px"
							fontWeight={sortSelection === "price_asc" ? 600 : 300}
							borderLeft={sortSelection === "price_asc" && "5px solid #3483fa"}
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
								sortSelection === "price_desc" ? "meliBlue" : "meliLightGray"
							}
							p="10px"
							pl="16px"
							h="40px"
							fontWeight={sortSelection === "price_desc" ? 600 : 300}
							borderLeft={sortSelection === "price_desc" && "5px solid #3483fa"}
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
	);
}

export default SearchedProductSorts;

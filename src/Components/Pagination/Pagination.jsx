import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";

function Pagination() {
	const [params, setParams] = useSearchParams();
	const { searchedProduct } = useContext(ProductsContext);
	console.log("window.location:", window.location);

	return (
		<Flex justify="center" align="center" mt="32px">
			{Number(params.get("offset")) > 0 ? (
				<Flex
					cursor="pointer"
					mr="15px"
					color="meliBlue"
					fontFamily="Proxima Nova"
					justify="space-between"
					align="center"
					onClick={() => {
						let currentOffset = params.get("offset");
						if (currentOffset && currentOffset > 0) {
							let prevPage = Number(currentOffset) - 50;
							if (prevPage < 0) {
								prevPage = 0;
							}
							params.set("offset", prevPage);
							let pagina = Number(params.get("pagina"));
							params.set("pagina", pagina - 1);
							setParams(params);
						}
					}}
				>
					<Box mt="3px">
						<MdKeyboardArrowLeft />
					</Box>
					<Box fontWeight={400}>Anterior</Box>
				</Flex>
			) : (
				<Box w="83px" />
			)}
			<Flex
				justify="center"
				align="center"
				bg="rgba(0,0,0,.04)"
				h="36px"
				w="36px"
				color="rgba(0,0,0,.45)"
				fontWeight={600}
			>
				{params.get("pagina") === null ? 1 : Number(params.get("pagina"))}
			</Flex>
			{Number(params.get("offset")) <
			searchedProduct?.paging?.primary_results - 1 ? (
				<Flex
					cursor="pointer"
					ml="15px"
					color="meliBlue"
					fontFamily="Proxima Nova"
					justify="space-between"
					align="center"
					onClick={() => {
						let currentOffset = params.get("offset");
						if (
							currentOffset &&
							currentOffset < searchedProduct?.paging?.primary_results
						) {
							let nextPage = Number(currentOffset) + 50;
							if (nextPage > searchedProduct?.paging?.primary_results) {
								nextPage =
									searchedProduct?.paging?.primary_results -
									Number(currentOffset) -
									1 +
									Number(currentOffset);
							}
							params.set("offset", nextPage);
							let pagina = Number(params.get("pagina"));
							params.set("pagina", pagina === null ? 2 : pagina + 1);
							setParams(params);
						} else {
							params.set("offset", 50);
							let pagina = Number(params.get("pagina"));
							params.set("pagina", pagina === null ? 2 : pagina + 1);
							setParams(params);
						}
					}}
				>
					<Box fontWeight={400}>Siguiente</Box>
					<Box mt="3px">
						<RiArrowRightSLine />
					</Box>
				</Flex>
			) : (
				<Box w="83px" />
			)}
		</Flex>
	);
}

export default Pagination;

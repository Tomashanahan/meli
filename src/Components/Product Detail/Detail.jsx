import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import profucto_1 from "../../img/Producto/product1.jpg";
import profucto_2 from "../../img/Producto/product2.jpg";
import profucto_3 from "../../img/Producto/product3.jpg";
import Descriptioin from "./Descriptioin";
import Price from "./Price";
import Vendedor from "./vendedor";
import ProductOpinions from "./ProductOpinions";

function Detail() {
	return (
		<Flex
			boxSizing="border-box"
			justify="space-between"
			p="20"
			w="85%"
			m="auto"
			bg="#FFFF"
			boxShadow="0 1px 2px 0 rgb(0 0 0 / 25%)"
			borderRadius="4"
			my="40"
		>
			<Stack>
				<Flex h="fit-content">
					<Stack>
						<Image
							border="1px solid rgba(0,0,0,.25)"
							borderRadius="6px"
							p="4"
							h="44px"
							w="44px"
							src={profucto_1}
							alt="profucto_1"
						/>
						<Image
							border="1px solid rgba(0,0,0,.25)"
							borderRadius="6px"
							p="4"
							h="44px"
							w="44px"
							src={profucto_2}
							alt="profucto_1"
						/>
						<Image
							border="1px solid rgba(0,0,0,.25)"
							borderRadius="6px"
							p="4"
							h="44px"
							w="44px"
							src={profucto_3}
							alt="profucto_1"
						/>
					</Stack>
					<Box>
						<Image
							h="500px"
							w="700px"
							objectFit="contain"
							src={profucto_1}
							alt="profucto_1"
						/>
					</Box>
				</Flex>
				<Box px="45px">
					<Box
						w="100%"
						pt="30px"
						m="auto"
						alignSelf="center"
						borderBottom="1px solid rgba(0,0,0,.1)"
						h="3px"
					/>
					<Descriptioin />
					<Box
						w="100%"
						m="auto"
						mt="30px"
						alignSelf="center"
						borderBottom="1px solid rgba(0,0,0,.1)"
						h="3px"
					/>
					aca
					<Box
						w="100%"
						m="auto"
						mt="30px"
						alignSelf="center"
						borderBottom="1px solid rgba(0,0,0,.1)"
						h="3px"
					/>
					<Box
						w="100%"
						m="auto"
						mt="30px"
						alignSelf="center"
						borderBottom="1px solid rgba(0,0,0,.1)"
						h="3px"
					/>
					<ProductOpinions />
				</Box>
			</Stack>
			<Stack>
				<Price />
				<Vendedor />
			</Stack>
		</Flex>
	);
}

export default Detail;

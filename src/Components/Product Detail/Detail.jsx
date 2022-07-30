import {
	Box,
	Flex,
	Image,
	Stack,
} from "@chakra-ui/react";
import React from "react";
import profucto_1 from "../../img/Producto/product1.jpg";
import profucto_2 from "../../img/Producto/product2.jpg";
import profucto_3 from "../../img/Producto/product3.jpg";
import Price from "./Price";

function Detail() {
	return (
		<Flex
			boxSizing="border-box"
			justify="space-between"
			p="20"
			w="80%"
			m="auto"
			bg="#FFFF"
			boxShadow="0 1px 2px 0 rgb(0 0 0 / 25%)"
			borderRadius="4"
			my="40"
		>
			<Flex>
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
			<Price />
		</Flex>
	);
}

export default Detail;

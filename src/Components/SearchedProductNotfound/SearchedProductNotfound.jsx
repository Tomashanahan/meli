import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

function SearchedProductNotfound() {
	return (
		<Flex justify="center" align="center" pb="55vh">
			<Box
				w="70%"
				textAlign="center"
				mt="50px"
				bg="white"
				p="20px"
				color="black"
			>
				<Box
					fontSize={["12px", "12px", "15px", "20px", "20px", "20px"]}
					fontWeight={600}
				>
					No hay publicaciones que coincidan con tu búsqueda.
				</Box>
				<UnorderedList
					fontSize={["12px", "12px", "15px", "18px", "16px", "16px"]}
					w={["95%", "95%", "90%", "90%", "75%", "50%"]}
					textAlign="left"
					m="auto"
					my="20px"
				>
					<ListItem>Revisá la ortografía de la palabra.</ListItem>
					<ListItem>Utilizá palabras más genéricas o menos palabras.</ListItem>
					<ListItem>
						Navegá por las categorías para encontrar un producto similar
					</ListItem>
				</UnorderedList>
			</Box>
		</Flex>
	);
}

export default SearchedProductNotfound;

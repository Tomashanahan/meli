import React, { useLayoutEffect } from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";

function FiltersModal({ searchedProduct, filterName, setShowAllfilters }) {
	console.log(searchedProduct);
	const renderFilters = () => {
		searchedProduct = searchedProduct.filter((e) => e.name === filterName);
		let obj = {};
		for (let i = 0; i < searchedProduct?.length; i++) {
			for (let j = 0; j < searchedProduct[i].values?.length; j++) {
				if (
					searchedProduct[i].values[j].name[0] in obj &&
					searchedProduct[i].values[j].name[0].startsWith(Object.keys(obj)[i])
				) {
					obj[searchedProduct[i].values[j].name[0]].push({
						name: searchedProduct[i].values[j].name,
						results: searchedProduct[i].values[j].results,
					});
				} else {
					obj[searchedProduct[i].values[j].name[0]] = [
						{
							name: searchedProduct[i].values[j].name,
							results: searchedProduct[i].values[j].results,
						},
					];
				}
			}
		}

		return (
			<Box
				bg="#FFF"
				w="50%"
				p="30px"
				h="500px"
				overflowY="scroll"
				borderRadius="5px"
			>
				<Box
					my="0"
					ml="30px"
					pt="20px"
					fontSize="20px"
					fontWeight={600}
					w="90%"
				>
					<Flex justify="space-between" align="center">
						<Text>{filterName}</Text>
						<Box color="#3483fa" fontSize="24px" cursor="pointer" onClick={() => setShowAllfilters(false)}>
							<IoMdClose />
						</Box>
					</Flex>
					<Input
						borderRadius="8px"
						border="1px solid rgba(0,0,0,.25)"
						placeholder="Buscar..."
						pl="15px"
						_placeholder={{
							color: "rgba(0,0,0,.25)",
							fontWeight: 400,
						}}
						fontSize="20px"
						h="52px"
						m="0"
						w="95%"
						type="text"
					/>
				</Box>
				{Object.entries(obj)?.sort()?.map((e) => (
					<Flex key={e.id} bg="#FFF" w="100%" align="self-start" mt="10px">
						<Text
							w="5%"
							pt="32px"
							mt="0"
							color="#333"
							fontWeight={700}
							fontSize="18px"
						>
							{`${e[0]}`}
						</Text>
            <Flex
								flexWrap="wrap"
								m="auto"
								w="100%"
								borderBottom="1px solid #e6e6e6"
								p="32px 0 32px 4px"
							>
						{e[1]?.length > 1 ? (
							e[1].map((e, i) => (
								// <Flex
								// 	flexWrap="wrap"
								// 	m="auto"
								// 	key={i}
								// 	w="100%"
								// 	borderBottom="1px solid #e6e6e6"
								// 	p="32px 0 32px 4px"
								// >
									<Text
										color="#666"
										w="200px"
										fontWeight={400}
										my="0"
										mb="7px"
										fontSize="14px"
										mx="10px"
									>
										{`${e.name} (${e.results})`}
									</Text>
								// </Flex>
							))
						) : (
							// <Flex
							// 	flexWrap="wrap"
							// 	m="auto"
							// 	w="100%"
							// 	borderBottom="1px solid #e6e6e6"
							// 	p="32px 0 32px 4px"
							// >
							<Text
								color="#666"
								w="200px"
								fontWeight={400}
								my="0"
								mb="7px"
								fontSize="14px"
								mx="10px"
							>
								{`${e[1][0].name} (${e[1][0].results})`}
							</Text>
							//</Flex>
						)}
            </Flex>
					</Flex>
				))}
			</Box>
		);
	};

	useLayoutEffect(() => {
		renderFilters();
	}, []);

	return (
		<Flex
			justify="center"
			align="center"
			top="0"
			h="100vh"
			pos="absolute"
			bg="rgba(0,0,0,.8)"
			zIndex={1000}
			w="100%"
		>
			{renderFilters()}
			{/* <Box
				bg="#FFF"
				w="50%"
				p="30px"
				h="500px"
				overflowY="hidden"
				borderRadius="5px"
			>
				<Box
					my="0"
					ml="30px"
					pt="20px"
					fontSize="20px"
					fontWeight={600}
					w="90%"
				>
					<Flex justify="space-between" align="center">
						<Text>Ubicacion</Text>
						<Box color="#3483fa" fontSize="24px" cursor="pointer">
							<IoMdClose />
						</Box>
					</Flex>
					<Input
						borderRadius="8px"
						border="1px solid rgba(0,0,0,.25)"
						placeholder="Buscar..."
						pl="15px"
						_placeholder={{
							color: "rgba(0,0,0,.25)",
							fontWeight: 400,
						}}
						fontSize="20px"
						h="52px"
						m="0"
						w="95%"
						type="text"
					/>
				</Box>
				<Flex bg="#FFF" w="100%" align="self-start" mt="10px">
					<Text
						w="5%"
						pt="32px"
						mt="0"
						color="#333"
						fontWeight={700}
						fontSize="18px"
					>
						A
					</Text>
					<Flex
						flexWrap="wrap"
						m="auto"
						w="100%"
						borderBottom="1px solid #e6e6e6"
						p="32px 0 32px 4px"
					>
						<Text
							color="#666"
							w="200px"
							fontWeight={400}
							my="0"
							mb="7px"
							fontSize="14px"
							mx="10px"
						>
							Bs.As. Costa Atlántica
						</Text>
					</Flex>
				</Flex>
			</Box> */}
		</Flex>
	);
}

export default FiltersModal;

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

function FiltersModal({
	searchedProduct,
	filterName,
	setShowAllfilters,
	query,
	addFilterQuerysToParams,
}) {
	const filterModal = useRef();
	searchedProduct = searchedProduct.filter((e) => e.name === filterName);
	const [params, setParams] = useSearchParams();

	const renderFilters = () => {
		let obj = {};
		for (let i = 0; i < searchedProduct?.length; i++) {
			for (let j = 0; j < searchedProduct[i].values?.length; j++) {
				if (
					searchedProduct[i].values[j].name[0] in obj &&
					searchedProduct[i].values[j].name[0].startsWith(Object.keys(obj)[i])
				) {
					obj[searchedProduct[i].values[j].name[0]].push({
						id: searchedProduct[i].values[j].id,
						name: searchedProduct[i].values[j].name,
						results: searchedProduct[i].values[j].results,
					});
				} else {
					obj[searchedProduct[i].values[j].name[0]] = [
						{
							id: searchedProduct[i].values[j].id,
							name: searchedProduct[i].values[j].name,
							results: searchedProduct[i].values[j].results,
						},
					];
				}
			}
		}

		return (
			<Box
				bg="white"
				w={["95%", "95%", "95%", "95%", "70%", "50%"]}
				p="30px"
				h="500px"
				overflowY="scroll"
				ref={filterModal}
				borderRadius="5px"
			>
				<Box
					my="0"
					ml={["0", "0", "0", "0", "10px", "30px"]}
					pt="20px"
					fontSize="20px"
					fontWeight={600}
					w="100%"
				>
					<Flex justify="space-between" align="center" color="black">
						<Text>{filterName}</Text>
						<Box
							color="meliBlue"
							fontSize="24px"
							cursor="pointer"
							onClick={() => setShowAllfilters(false)}
						>
							<IoMdClose />
						</Box>
					</Flex>
					<Input
						outline="1px solid rgba(0,0,0,.25)"
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
						mt="20px"
						type="text"
					/>
				</Box>
				{Object.entries(obj)
					?.sort()
					?.map((e, i) => {
						return (
							<Flex key={i} bg="white" w="100%" align="self-start" mt="10px">
								<Box
									w="5%"
									pt="32px"
									mt="0"
									color="meliGray"
									fontWeight={700}
									fontSize="18px"
								>
									{`${e[0]}`}
								</Box>
								<Flex
									flexWrap="wrap"
									m="auto"
									w="100%"
									borderBottom="1px solid #e6e6e6"
									p="32px 0 32px 4px"
								>
									{e[1]?.length > 1 ? (
										e[1].map((e, i) => (
											<Text
												color="meliLightGray"
												key={i}
												w="200px"
												fontWeight={400}
												my="0"
												mb="7px"
												fontSize="14px"
												onClick={() => {
													params.set("offset", 0);
													params.set("pagina", 1);
													setParams(params);
													addFilterQuerysToParams(
														query,
														searchedProduct[0]?.id,
														e.id,
														e.name
													);
													setShowAllfilters(false);
													window.scrollTo(0, 0);
												}}
												mx="10px"
												cursor="pointer"
											>
												{`${e.name} (${e.results})`}
											</Text>
										))
									) : (
										<Text
											color="meliLightGray"
											w="200px"
											fontWeight={400}
											my="0"
											mb="7px"
											fontSize="14px"
											onClick={() => {
												params.set("offset", 0);
												params.set("pagina", 1);
												setParams(params);
												addFilterQuerysToParams(
													query,
													searchedProduct[0]?.id,
													e[1][0].id,
													e[1][0].name
												);
												setShowAllfilters(false);
												window.scrollTo(0, 0);
											}}
											mx="10px"
											cursor="pointer"
										>
											{`${e[1][0].name} (${e[1][0].results})`}
										</Text>
									)}
								</Flex>
							</Flex>
						);
					})}
			</Box>
		);
	};
	const keyPress = (e) => {
		const key = e.key;
		if (key === "ArrowDown") {
			e.preventDefault();
		} else if (key === "Escape") {
			setShowAllfilters(false);
		}
	};

	function preventScroll(e) {
		let endOfScroll =
			filterModal?.current?.scrollTop + filterModal?.current?.clientHeight ===
			filterModal?.current?.scrollHeight;

		if (!filterModal.current.contains(e.target)) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		} else if (filterModal.current.contains(e.target)) {
			if (endOfScroll && e.deltaY > 0) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		}
	}

	const closeModal = (e) => {
		if (!filterModal.current.contains(e.target)) {
			setShowAllfilters(false);
		}
	};

	useEffect(() => {
		function watchScroll() {
			window.addEventListener("keydown", keyPress);
			window.addEventListener("wheel", preventScroll, { passive: false });
			window.addEventListener("click", closeModal);
		}
		watchScroll();
		return () => {
			window.removeEventListener("keydown", keyPress);
			window.removeEventListener("wheel", preventScroll, { passive: false });
			window.removeEventListener("click", closeModal);
		};
	});

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
		</Flex>
	);
}

export default FiltersModal;

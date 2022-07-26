import React, { useEffect, useState } from "react";
import img_dyney from "../../img/header_disney.png";
import { FiMapPin } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import usuario from "../../img/user_logo.png";
import { Box, GridItem, Flex, Grid, Image, Text } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import { useMediaQuery } from "@chakra-ui/react";

function Header() {
	const [logoMobile, setlogoMobile] = useState(
		"https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus@2x.png"
	);
	const [isMobile] = useMediaQuery("(max-width: 794px)");

	const templateAreasResponsive = (frameSize) => {
		let obj = {
			mobile: `
								"logo input input"
								"direc direc direc" 
					`,
			desktop: `
								"logo input diney"
								"direc cate carrito" 
					`,
		};
		return obj[frameSize];
	};

	useEffect(() => {
		isMobile
			? setlogoMobile(
					"https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__small@2x.png"
			  )
			: setlogoMobile(
					"https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus@2x.png"
			  );
	}, [isMobile]);

	return (
		<Box bg="meliYellow" h="110px">
			<Grid
				templateAreas={templateAreasResponsive(isMobile ? "mobile" : "desktop")}
				gridTemplateRows={"50px 50px"}
				gridTemplateColumns={"15% 55% 30%"}
				color="blackAlpha.700"
				fontWeight="bold"
				p="5px"
				alignItems="center"
				w={["95%", "95%", "95%", "95%", "95%", "82%"]}
				m="auto"
			>
				<GridItem area={"logo"} justifySelf="flex-start">
					<Image
						src={logoMobile}
						objectFit="contain"
						w="134px"
						h="34px"
						alt="Mercado libre donde comprar todo lo que queres"
					/>
				</GridItem>
				<GridItem
					ml={["20px", "20px", "20px", "20px", "0"]}
					area={"input"}
					className="header_superior-search"
				>
					<SearchBar />
				</GridItem>
				<GridItem
					area={"diney"}
					display={["none", "none", "none", "none", "block"]}
				>
					<Flex justify="flex-end">
						<Image
							className="img_disney"
							src={img_dyney}
							alt="foto"
							width="340px"
						/>
					</Flex>
				</GridItem>
				<GridItem mr="20px" area="direc" justifySelf="flex-start">
					<Flex justify="center" align="center">
						<Box fontSize="23px" fontWeight={0} color="transparentBlack">
							<FiMapPin />
						</Box>
						<Flex
							flexDirection={["row", "row", "row", "row", "column"]}
							ml="5px"
						>
							<Text
								mb={["0", "0", "0", "0", "-5px"]}
								fontWeight={400}
								color={[
									"melimediumhGray",
									"melimediumhGray",
									"melimediumhGray",
									"melimediumhGray",
									"rgba(0,0,0,.5)",
								]}
								fontSize={["14px", "14px", "14px", "14px", "12px"]}
							>
								Enviar a Tomas
							</Text>
							<Text
								ml={["10px", "10px", "10px", "10px", "0"]}
								color="melimediumhGray"
								fontWeight={400}
								fontSize="14px"
							>
								Santa Fe 4200
							</Text>
						</Flex>
					</Flex>
				</GridItem>
				<GridItem
					area="cate"
					display={["none", "none", "none", "none", "block"]}
				>
					<Flex justify="left" align="self-end">
						<Flex align="center">
							<Text fontSize="14px" fontWeight={400} color="rgba(50,50,50,.6)">
								Categorías
							</Text>
							<Box fontSize="10px" color="transparentBlack" ml="3px" mt="5%">
								<IoIosArrowDown />
							</Box>
						</Flex>
						<Text
							mx="10px"
							fontWeight={400}
							fontSize="14px"
							color="meliLigthYellow"
						>
							Ofertas
						</Text>
						<Text
							mx="10px"
							fontWeight={400}
							fontSize="14px"
							color="meliLigthYellow"
						>
							Historial
						</Text>
						<Text
							mx="10px"
							fontWeight={400}
							fontSize="14px"
							color="meliLigthYellow"
						>
							Supermercado
						</Text>
						<Text
							mx="10px"
							fontWeight={400}
							fontSize="14px"
							color="meliLigthYellow"
						>
							Moda
						</Text>
						<Text
							mx="10px"
							fontWeight={400}
							fontSize="14px"
							color="meliLigthYellow"
						>
							Vender
						</Text>
						<Text
							mx="10px"
							fontWeight={400}
							fontSize="14px"
							color="meliLigthYellow"
						>
							Ayuda
						</Text>
					</Flex>
				</GridItem>
				<GridItem
					area="carrito"
					display={["none", "none", "none", "none", "block"]}
				>
					<Flex align="center" justify="right">
						<Box color="meliBlack" fontSize="14px" fontWeight={400} mx="10px">
							<Flex align="center">
								<Image
									alt="Foto"
									className="flecha"
									src={usuario}
									width="22px"
									mr="10px"
								/>
								Tomas
								<Box fontSize="10px" color="transparentBlack" ml="3px" mt="5%">
									<IoIosArrowDown />
								</Box>
							</Flex>
						</Box>
						<Text color="meliBlack" fontSize="14px" fontWeight={400} mx="10px">
							Mis compras
						</Text>
						<Flex align="center">
							<Text
								color="meliBlack"
								fontSize="14px"
								fontWeight={400}
								ml="10px"
							>
								Favoritos
							</Text>
							<Box fontSize="10px" color="transparentBlack" ml="3px" mt="5%">
								<IoIosArrowDown />
							</Box>
						</Flex>
					</Flex>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default Header;

/* 

<Box bg="meliYellow" h="110px">
			<Grid
				templateAreas={`"logo input diney"
                "direc cate carrito"
                `}
				gridTemplateRows={"50px 50px"}
				gridTemplateColumns={"15% 55% 30%"}
				color="blackAlpha.700"
				fontWeight="bold"
				p="5px"
				alignItems="center"
				w="82%"
				m="auto"
			>
				<GridItem area={"logo"} justifySelf="flex-start">
					<Link to="/">
						<Image
							src={
								"https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus@2x.png"
							}
							w="134px"
							h="34px"
							alt="Mercado libre donde comprar todo lo que queres"
						/>
					</Link>
				</GridItem>
				<GridItem area={"input"} className="header_superior-search">
					<SearchBar />
				</GridItem>
				<GridItem area={"diney"}>
					<Flex justify="flex-end">
						<Image
							className="img_disney"
							src={img_dyney}
							alt="foto"
							width="340px"
						/>
					</Flex>
				</GridItem>
				<GridItem mr="20px" area="direc" justifySelf="flex-start">
					<Flex justify="center" align="center">
						<Box fontSize="23px" fontWeight={0} color="transparentBlack">
							<FiMapPin />
						</Box>
						<Box ml="5px">
							<Text
								mb="-16px"
								fontWeight={400}
								color="rgba(0,0,0,.5)"
								fontSize="12px"
							>
								Enviar a Tomas
							</Text>
							<Text color="melimediumhGray" fontWeight={400} fontSize="14px">
								Santa Fe 4200
							</Text>
						</Box>
					</Flex>
				</GridItem>
				<GridItem area="cate">
					<Flex justify="left" align="self-end">
						<Flex align="center">
							<Text
								fontSize="14px"
								fontWeight={400}
								color="rgba(50,50,50,.6)"
							>
								Categorías
							</Text>
							<Box fontSize="10px" color="transparentBlack" ml="3px" mt="5%">
								<IoIosArrowDown />
							</Box>
						</Flex>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="meliLigthYellow">
							Ofertas
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="meliLigthYellow">
							Historial
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="meliLigthYellow">
							Supermercado
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="meliLigthYellow">
							Moda
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="meliLigthYellow">
							Vender
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="meliLigthYellow">
							Ayuda
						</Text>
					</Flex>
				</GridItem>
				<GridItem area="carrito">
					<Flex align="center" justify="right">
						<Box color="meliBlack" fontSize="14px" fontWeight={400} mx="10px">
							<Flex align="center">
								<Image
									alt="Foto"
									className="flecha"
									src={usuario}
									width="22px"
									mr="10px"
								/>
								Tomas
								<Box fontSize="10px" color="transparentBlack" ml="3px" mt="5%">
									<IoIosArrowDown />
								</Box>
							</Flex>
						</Box>
						<Text color="meliBlack" fontSize="14px" fontWeight={400} mx="10px">
							Mis compras
						</Text>
						<Flex align="center">
							<Text color="meliBlack" fontSize="14px" fontWeight={400} ml="10px">
								Favoritos
							</Text>
							<Box fontSize="10px" color="transparentBlack" ml="3px" mt="5%">
								<IoIosArrowDown />
							</Box>
						</Flex>
					</Flex>
				</GridItem>
			</Grid>
		</Box>

 */

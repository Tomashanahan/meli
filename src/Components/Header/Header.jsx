import React from "react";
import "./Header.css";
import img_dyney from "../../img/header_disney.png";
import logo from "../../img/logo.png";
import img_ubicacion from "../../img/icons8-marker-o-50.png";
import svg_lupa from "../../img/icons8-búsqueda.png";
import flecha from "../../img/flecha.png";
import usuario from "../../img/user_logo.png";
import carrito from "../../img/carrito.png";
import {
	Box,
	GridItem,
	Flex,
	Grid,
	Image,
	Input,
	Text,
} from "@chakra-ui/react";

function Header() {
	return (
		<Box bg="#FFF059" h="110px">
			<Grid
				templateAreas={`"logo input diney"
                "direc cate carrito"
                `}
				gridTemplateRows={"50px 50px"}
				gridTemplateColumns={"20% 50% 30%"}
				color="blackAlpha.700"
				fontWeight="bold"
				p="5px"
				alignItems="center"
                w='90%'
                m='auto'
			>
				<GridItem area={"logo"}>
					<a
						href="http://mercadolibre.com.ar"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus@2x.png'}
							// src={logo}
                            w='134px'
                            h='34px'
							alt="Mercado libre donde comprar todo lo que queres"
						/>
					</a>
				</GridItem>
				<GridItem area={"input"} className="header_superior-search">
					<button className="header_superior-input_btn">
						<Input
							padding="12px 60px 12px 15px"
							width="100%"
							border="none"
							background-color="#ffffff"
							font-size="15px"
							line-height="12px"
							box-shadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
							type="text"
							placeholder="Buscar productos, marcas y más..."
							_placeholder={{ color: "#BFBFBF" }}
							boxShadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
						/>
						<Box>
							<Image
								position=" relative"
								right="150%"
								borderLeft=" 1px solid #E6E6E6"
								pl="10px"
								pt="7px"
								mt="2px"
								pb="5px"
								src={svg_lupa}
								alt="Lupa"
								height="18px"
								with="16px"
							/>
						</Box>
					</button>
				</GridItem>
				<GridItem area={"diney"}>
                    <Flex justify='flex-end'>
					<Image
						className="img_disney"
						src={img_dyney}
						alt="foto"
						width="340px"
					/>
                    </Flex>
				</GridItem>
				<GridItem mr="20px" area="direc">
					<Flex justify="center" align="center">
						<Image src={img_ubicacion} alt="img" height="27px" with="18px" />
						<Box ml="5px">
							<Text mb="-16px" fontWeight={400}>
								<span>Enviar a Tomas</span>
							</Text>
							<Text color="#363633" fontWeight={400} fontSize="14px">
								Santa Fe 1200
							</Text>
						</Box>
					</Flex>
				</GridItem>
				<GridItem area="cate">
					<Flex justify="left" align="self-end">
						<Text
							mx="10px"
							fontSize="14px"
                            fontWeight={400}
							color="rgba(50,50,50,.6)"
						>
							Categorías
							<Image
								className="flecha"
								src={flecha}
								width="10px"
								alt="Categorias"
							/>
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="#7F793D">
							Ofertas
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="#7F793D">
							Historial
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="#7F793D">
							Supermercado
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="#7F793D">
							Moda
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="#7F793D">
							Vender
						</Text>
						<Text mx="10px" fontWeight={400} fontSize="14px" color="#7F793D">
							Ayuda
						</Text>
					</Flex>
				</GridItem>
				<GridItem area="carrito">
					<Flex align="center" justify="right">
						<Text color="#3C3B35" fontSize="14px" fontWeight={400} mx="10px">
                            <Flex align='center'>
							<Image alt="Foto" className="flecha" src={usuario} width="22px" mr="10px"/>
							Tomas
							<Image alt="Foto" className="flecha" src={flecha} width="10px" />
                            </Flex>
						</Text>
						<Text color="#3C3B35" fontSize="14px" fontWeight={400} mx="10px">
							Mis compras
						</Text>
						<Text color="#3C3B35" fontSize="14px" fontWeight={400} mx="10px">
							Favoritos
							<Image alt="Foto" className="flecha" src={flecha} width="10px" />
						</Text>
					</Flex>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default Header;

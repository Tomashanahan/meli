import React from "react";
import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { TbArrowBack } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

function Price() {
	return (
		<Stack
			w="100%"
			border="1px solid rgba(0,0,0,.1)"
			borderRadius="8"
			p="24px 16px"
		>
			<Text
				m={0}
				color="rgba(0,0,0,.55)"
				fontSize="14px"
				textAlign="left"
				fontWeight={500}
			>
				Nuevo | 50 vendidos
			</Text>
			<Flex align="flex-start">
				<Text
					m={0}
					lineHeight="25px"
					textAlign="left"
					fontSize={22}
					color="rgba(0,0,0,.9)"
					fontWeight={500}
				>
					Peluche Almohada Soft Animales Acostados 46cm Largo
				</Text>
				<Box color="#3483fa">
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 16 16"
						class="fav-icon"
						height="21px"
						width="24px"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
					</svg>
				</Box>
			</Flex>
			<Box>
				<Text textAlign="left" fontWeight={300}>
					<Box fontSize="36px">$ 3.099</Box> en 12x 457 pesos con 64 centavos
					$457
				</Text>
				<Text
					mt={-10}
					textAlign="left"
					color="#3483fa"
					cursor={"pointer"}
					fontSize="14"
					fontWeight={500}
				>
					Ver los medios de pago
				</Text>
			</Box>
			{/* ENVIO */}
			<Stack spacing={15}>
				<Box>
					<Flex color="#05A550" align="center">
						<Flex m={0} mr="10">
							<svg
								stroke="currentColor"
								fill="none"
								stroke-width="0"
								viewBox="0 0 24 24"
								class="green-icon"
								height="23px"
								width="23px"
							>
								<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
								></path>
							</svg>
						</Flex>
						<Stack align="flex-start">
							<Text m={0} mb="-10px">
								Llega gratis el{" "}
								<Container display="inline-block" fontWeight={800}>
									lunes
								</Container>
							</Text>
							<Text
								color="#3483fa"
								cursor={"pointer"}
								fontSize="14"
								fontWeight={500}
							>
								Ver más formas de entrega
							</Text>
						</Stack>
					</Flex>
				</Box>
				{/* nose */}
				<Box>
					<Flex color="#05A550" align="flex-start">
						<Box fontSize="23px" m={0} mr="10">
							<TbArrowBack />
						</Box>
						<Stack align="flex-start" spacing={0}>
							<Text m={0}>Devolución gratis </Text>
							<Box
								m={0}
								color="rgba(0,0,0,.55)"
								cursor={"pointer"}
								fontSize="14"
								fontWeight={300}
								marginBottom="-10px"
							>
								Tenés 30 días desde que lo recibís.
							</Box>
							<Text
								color="#3483fa"
								cursor={"pointer"}
								fontSize="14"
								fontWeight={500}
							>
								Conocer más
							</Text>
						</Stack>
					</Flex>
				</Box>
				{/* nose */}
				{/* Stock */}
				<Box textAlign="left">
					<Text fontWeight={600}>Stock disponible</Text>
					<Flex align="center">
						Cantidad:
						<Text m={0} ml="5" fontWeight={600} display="inline-block">
							1 unidad
						</Text>
						<Box h="18px" mx="3" display="inline" color="#3483fa">
							<IoIosArrowDown />
						</Box>
						<Text
							m={0}
							display="inline-block"
							color="rgba(0,0,0,.55)"
							fontSize="14"
						>
							(2 disponibles)
						</Text>
					</Flex>
				</Box>
				{/* Stock */}

				{/* Botones */}
				<Box mt="20px">
					<Button
						alignSelf="center"
						fontFamily="Proxima Nova"
						w="318px"
						h="48px"
						borderRadius="6px"
						fontSize="16px"
						fontWeight={600}
						border="none"
						bg="#3483fa"
						color="#FFFF"
						m="auto"
						mb="10px"
					>
						Comprar ahora
					</Button>
					<Button
						fontFamily="Proxima Nova"
						alignSelf="center"
						m="auto"
						w="318px"
						h="48px"
						borderRadius="6px"
						fontSize="16px"
						fontWeight={600}
						border="none"
						bg="rgba(65,137,230,.15)"
						color="#3483fa"
					>
						Agregar al carrito
					</Button>
				</Box>
				{/* Botones */}
				{/* Datos de color */}
				<Flex justify="space-around" align="center" pt="20px">
					<svg
						stroke="#737373"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 512 512"
						class="benefits-icon"
						height="16px"
						width="16px"
					>
						<path
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="42"
							d="M336 176L225.2 304 176 255.8"
						></path>
						<path
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="42"
							d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
						></path>
					</svg>
					<Text
						m={0}
						mt={10}
						w="88%"
						textAlign="left"
						fontSize="14px"
						fontWeight={400}
					>
						<Text color="#3483fa" display="inline">
							Compra Protegida
						</Text>
						, recibí tu producto que esperabas o te devolvemos tu dinero.
					</Text>
				</Flex>
				<Flex justify="space-around" align="center">
					<svg
						stroke="#737373"
						fill="#737373"
						stroke-width="0"
						viewBox="0 0 24 24"
						class="benefits-icon"
						height="1em"
						width="1em"
					>
						<path d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4zm6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83z"></path>
					</svg>
					<Text w="88%" textAlign="left" fontSize="14px" fontWeight={400}>
						<Text color="#3483fa" display="inline">
							Mercado Puntos
						</Text>
						. Sumás 22 puntos.
					</Text>
				</Flex>
				{/* Datos de color */}
			</Stack>
		</Stack>
	);
}

export default Price;

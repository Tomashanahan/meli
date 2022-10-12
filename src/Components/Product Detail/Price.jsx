import React from "react";
import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { TbArrowBack } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

function Price({ product_detail }) {
	const {
		title,
		price,
		condition,
		sold_quantity,
		available_quantity,
		warranty,
		original_price,
		currency_id,
	} = product_detail;

	const formatPrice = (number) => {
		return new Intl.NumberFormat("de-DE", {
			maximumSignificantDigits: 10,
		}).format(number);
	};

	const calculateDiscount = (price, originalPrice) => {
		const diference = originalPrice - price;
		return Math.ceil((diference * 100) / originalPrice);
	};

	const monthlyFee = ((price * 101) / 100 + price) / 12;

	return (
		<Stack border="1px solid rgba(0,0,0,.1)" borderRadius="8" p="24px 16px">
			<Text
				m={0}
				color="rgba(0,0,0,.55)"
				fontSize="14px"
				textAlign="left"
				fontWeight={400}
				textTransform="capitalize"
				display={["none", "none", "none", "none", "block", "block"]}
			>
				{condition} | {sold_quantity} vendidos
			</Text>
			<Flex
				align="flex-start"
				display={["none", "none", "none", "none", "flex", "flex"]}
			>
				<Text
					m={0}
					lineHeight="25px"
					textAlign="left"
					fontSize="22px"
					mr="28px"
					color="rgba(0,0,0,.9)"
					fontWeight={500}
				>
					{title}
				</Text>
				<Box color="meliBlue">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 16 16"
						className="fav-icon"
						height="21px"
						width="24px"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
					</svg>
				</Box>
			</Flex>
			<Box>
				{original_price ? (
					<Box textAlign="left" fontWeight={300}>
						<Box
							fontSize="16px"
							mb="-8px"
							textDecor="line-through"
							color="rgba(0,0,0,.55)"
							fontWeight={400}
						>
							{currency_id?.symbol} {formatPrice(original_price)}
						</Box>
						<Flex align="center" fontSize="36px" color="black">
							{currency_id?.symbol} {formatPrice(price)}{" "}
							<span
								style={{
									color: "#00a650",
									fontSize: "18px",
									marginLeft: "10px",
									fontWeight: 400,
								}}
							>
								{calculateDiscount(price, original_price)}% OFF
							</span>
						</Flex>{" "}
						en 12x $ {monthlyFee.toFixed(2)} pesos
					</Box>
				) : (
					<Box textAlign="left" fontWeight={300}>
						<Flex align="center" fontSize="36px" color="black">
							{currency_id?.symbol} {formatPrice(price)}{" "}
						</Flex>{" "}
						en 12x $ {monthlyFee.toFixed(2)} pesos
					</Box>
				)}
				<Text
					textAlign="left"
					color="meliBlue"
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
					{product_detail?.shipping?.free_shipping && (
						<Flex color="#05A550" align="center">
							<Flex m={0} mr="10px">
								<svg
									stroke="currentColor"
									fill="none"
									strokeWidth="0"
									viewBox="0 0 24 24"
									className="green-icon"
									height="23px"
									width="23px"
								>
									<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
									></path>
								</svg>
							</Flex>
							<Stack align="flex-start">
								<Box m={0} mb="-10px">
									Envio gratis
								</Box>
								<Text
									color="meliBlue"
									cursor={"pointer"}
									fontSize="14px"
									fontWeight={500}
								>
									Ver más formas de entrega
								</Text>
							</Stack>
						</Flex>
					)}
				</Box>

				<Box>
					<Flex color="#05A550" align="flex-start">
						<Box fontSize="23px" m={0} mr="10px">
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
								color="meliBlue"
								cursor={"pointer"}
								fontSize="14"
								fontWeight={500}
							>
								Conocer más
							</Text>
						</Stack>
					</Flex>
				</Box>
				{/* Stock */}
				<Box textAlign="left">
					<Text
						fontWeight={600}
						color="black"
						fontSize={["16px", "16px", "16px", "16px", "16px", "16px"]}
					>
						{available_quantity > 0 ? "Stock disponible" : "Sin Stock"}
					</Text>
					<Flex
						align="center"
						color="black"
						fontSize={["12px", "12px", "16px", "16px", "16px", "16px"]}
					>
						Cantidad:
						<Text
							m={0}
							ml="5px"
							fontSize={["10px", "12px", "16px", "16px", "16px", "16px"]}
							fontWeight={600}
							display="inline-block"
						>
							1 unidad
						</Text>
						<Box h="18px" mx="3px" display="inline" color="meliBlue">
							<IoIosArrowDown />
						</Box>
						<Text
							m={0}
							display="inline-block"
							color="rgba(0,0,0,.55)"
							fontSize="12px"
						>
							({available_quantity}{" "}
							{available_quantity > 1 ? "disponibles" : "disponible"})
						</Text>
					</Flex>
				</Box>
				{/* Stock */}

				{/* Botones */}
				<Box mt="20px">
					<Button
						alignSelf="center"
						fontFamily="Proxima Nova"
						w={["100%", "100%", "100%", "100%", "318px", "318px"]}
						h="48px"
						borderRadius="6px"
						fontSize="16px"
						fontWeight={600}
						border="none"
						bg="meliBlue"
						color="white"
						m="auto"
						mb="10px"
					>
						Comprar ahora
					</Button>
					<Button
						fontFamily="Proxima Nova"
						alignSelf="center"
						m="auto"
						w={["100%", "100%", "100%", "100%", "318px", "318px"]}
						h="48px"
						borderRadius="6px"
						fontSize="16px"
						fontWeight={600}
						border="none"
						bg="rgba(65,137,230,.15)"
						color="meliBlue"
					>
						Agregar al carrito
					</Button>
				</Box>
				{/* Botones */}
				<Flex justify="space-around" align="center" pt="20px">
					<svg
						stroke="#737373"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 512 512"
						className="benefits-icon"
						height="16px"
						width="16px"
					>
						<path
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="42"
							d="M336 176L225.2 304 176 255.8"
						></path>
						<path
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="42"
							d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
						></path>
					</svg>
					<Box
						m={0}
						w="88%"
						textAlign="left"
						fontSize="14px"
						fontWeight={400}
						color="black"
					>
						<Text color="meliBlue" display="inline">
							Compra Protegida
						</Text>
						, recibí tu producto que esperabas o te devolvemos tu dinero.
					</Box>
				</Flex>
				<Flex justify="space-around" align="center">
					<svg
						stroke="#737373"
						fill="#737373"
						strokeWidth="0"
						viewBox="0 0 24 24"
						className="benefits-icon"
						height="1em"
						width="1em"
					>
						<path d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4zm6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83z"></path>
					</svg>
					<Box
						color="black"
						w="88%"
						textAlign="left"
						fontSize="14px"
						fontWeight={400}
					>
						<Text color="meliBlue" display="inline">
							Mercado Puntos
						</Text>
						. Sumás 22 puntos.
					</Box>
				</Flex>
				<Flex justify="space-around" align="center" color="black">
					<img
						src="https://img.icons8.com/fluency-systems-regular/48/737373/warranty.png"
						alt="a"
						height="20px"
						width="20px"
					/>
					<Text w="88%" textAlign="left" fontSize="14px" fontWeight={400}>
						{warranty}
					</Text>
				</Flex>
			</Stack>
		</Stack>
	);
}

export default Price;

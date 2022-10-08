import React from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

function Vendedor({ product_detail, seller_data }) {
	const { seller_address } = product_detail;
	const { seller_reputation } = seller_data;

	const colorReputation = (level_id) => {
		switch (level_id) {
			case "1_red":
				return (
					<>
						<Box h="12px" w="60px" bg="#F83535"></Box>
						<Box h="8px" w="60px" bg="#FFF5E8"></Box>
						<Box h="8px" w="60px" bg="#FEFCD8"></Box>
						<Box h="8px" w="60px" bg="#F1FDD6"></Box>
						<Box h="8px" w="60px" bg="#BAEEC0"></Box>
					</>
				);
			case "2_orange":
				return (
					<>
						<Box h="8px" w="60px" bg="#fff0f0"></Box>
						<Box h="12px" w="60px" bg="#F7AB49"></Box>
						<Box h="8px" w="60px" bg="#FEFCD8"></Box>
						<Box h="8px" w="60px" bg="#F1FDD6"></Box>
						<Box h="8px" w="60px" bg="#BAEEC0"></Box>
					</>
				);
			case "3_yellow":
				return (
					<>
						<Box h="8px" w="60px" bg="#fff0f0"></Box>
						<Box h="8px" w="60px" bg="#FFF5E8"></Box>
						<Box h="12px" w="60px" bg="#F8EE36"></Box>
						<Box h="8px" w="60px" bg="#F1FDD6"></Box>
						<Box h="8px" w="60px" bg="#BAEEC0"></Box>
					</>
				);
			case "4_light_green":
				return (
					<>
						<Box h="8px" w="60px" bg="#fff0f0"></Box>
						<Box h="8px" w="60px" bg="#FFF5E8"></Box>
						<Box h="8px" w="60px" bg="#FEFCD8"></Box>
						<Box h="12px" w="60px" bg="#B6F131"></Box>
						<Box h="8px" w="60px" bg="#BAEEC0"></Box>
					</>
				);
			case "5_green":
				return (
					<>
						<Box h="8px" w="60px" bg="#fff0f0"></Box>
						<Box h="8px" w="60px" bg="#FFF5E8"></Box>
						<Box h="8px" w="60px" bg="#FEFCD8"></Box>
						<Box h="8px" w="60px" bg="#F1FDD6"></Box>
						<Box h="12px" w="60px" bg="#3BB449"></Box>
					</>
				);
			default:
				<></>;
		}
	};

	return (
		<Stack
			border="1px solid rgba(0,0,0,.1)"
			borderRadius="8"
			p="24px 16px"
			color="#000"
		>
			<Text m={0} fontSize="18px" textAlign="left" fontWeight={400}>
				Información sobre el vendedor
			</Text>
			<Box>
				<Flex align="flex-start">
					<Flex mr="11" pt="5">
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 12 16"
							className="location-and-mercadoLider-icon"
							height="1em"
							width="1em"
						>
							<path
								fillRule="evenodd"
								d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
							></path>
						</svg>
					</Flex>
					<Stack align="flex-start">
						<Text m={0} mb="-10px" fontWeight={400}>
							Ubicación{" "}
						</Text>
						<Text
							color="rgba(0,0,0,.55)"
							cursor={"pointer"}
							fontSize="14"
							fontWeight={300}
						>
							{seller_address?.city?.name}, {seller_address?.state?.name}
						</Text>
					</Stack>
				</Flex>
			</Box>
			{seller_reputation?.power_seller_status === "platinum" && (
				<Box>
					<Flex align="flex-start">
						<Flex mr="8px" pt="5">
							<img
								decoding="async"
								src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg"
								alt="s"
							/>
						</Flex>
						<Stack align="flex-start">
							<Text m={0} mb="-10px" fontWeight={400} color="#05A550">
								MercadoLíder Platinum{" "}
							</Text>
							<Text
								color="rgba(0,0,0,.55)"
								cursor={"pointer"}
								fontSize="14"
								fontWeight={300}
							>
								¡Es uno de los mejores del sitio!
							</Text>
						</Stack>
					</Flex>
				</Box>
			)}
			<Flex justifyContent="space-between" align="center" pt="20px">
				{colorReputation(seller_reputation?.level_id)}
			</Flex>

			<Flex marginTop={10} align="center" justify="space-between" w="100%">
				<Box borderRight="1px solid #ddd" w="106px" m="auto" textAlign="center">
					<Text fontSize="24px" display="inline-block" m={0}>
						{seller_reputation?.transactions?.completed}
					</Text>
					<Text fontSize="12px" m={0} color="#515151">
						Ventas completadas
					</Text>
				</Box>
				<Stack
					textAlign="center"
					align="center"
					pt="10px"
					borderRight="1px solid #ddd"
					w="106px"
					m="auto"
				>
					<Image
						w="28px"
						decoding="async"
						src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg"
						alt=""
					/>
					<Text fontSize="12px" m={0} color="#515151">
						Brinda buena atención
					</Text>
				</Stack>
				<Stack align="center" pt="10px" w="106px" textAlign="center">
					<Image
						w="28px"
						alt="f"
						src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg"
					/>
					<Text fontSize="12px" pl="3px" m={0} color="#515151">
						Despacha sus productos a tiempo
					</Text>
				</Stack>
			</Flex>
			<Text
				textAlign="left"
				color="#3483fa"
				cursor={"pointer"}
				fontSize="14"
				fontWeight={400}
				pt={"20"}
			>
				Ver más datos de este vendedor
			</Text>
		</Stack>
	);
}

export default Vendedor;

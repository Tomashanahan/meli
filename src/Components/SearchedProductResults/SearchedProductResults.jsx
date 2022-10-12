import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

function SearchedProductResults({
	thumbnail,
	title,
	id,
	shipping,
	currency_id,
	price,
	original_price,
	formatPrice,
	calculateDiscount,
}) {
	return (
		<Link
			to={`/productDetail/${id}`}
			key={id}
			style={{ textDecoration: "none" }}
		>
			<Flex px="24px" pb="24px" p="20px 50px 20px 0">
				<Box w="160px" px="24px">
					<Image w="160px" h="160px" objectFit="contain" src={thumbnail} />
				</Box>
				<Box w="100%">
					<Text m="0" color="meliGray" fontSize="20px" fontWeight={300}>
						{title}
					</Text>
					<Flex justify="space-between" w="70%" align="center">
						{original_price ? (
							<>
								<Box mt="10px">
									<Box
										fontSize="12px"
										mb="-8px"
										textDecor="line-through"
										color="rgba(0,0,0,.55)"
										fontWeight={400}
									>
										$ {formatPrice(original_price)}
									</Box>
									<Text
										fontWeight={400}
										fontSize="24px"
										m="0"
										mt="10px"
										color="black"
									>
										{currency_id === "USD" ? "U$S" : "$"} {formatPrice(price)}{" "}
										<Text
											as="span"
											color="meliGreen"
											fontWeight={400}
											fontSize="14px"
										>
											{calculateDiscount(price, original_price)}% OFF
										</Text>
									</Text>
									{shipping?.free_shipping && (
										<Text
											color="meliGreen"
											fontWeight={600}
											fontSize="14px"
											m="0"
										>
											Envío gratis
										</Text>
									)}
								</Box>
								<Box pt="19px">
									<Flex align="flex-end" color="meliBlue">
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiFillStar />
										</Box>
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiFillStar />
										</Box>
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiFillStar />
										</Box>
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiFillStar />
										</Box>
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiOutlineStar />
										</Box>
										<Box
											fontSize="13px"
											color="meliGray"
											w="16px"
											h="16px"
											minW="50px"
											mr="7px"
										>
											1397
										</Box>
									</Flex>
								</Box>
							</>
						) : (
							<>
								<Box>
									<Box
										fontWeight={400}
										fontSize="24px"
										m="0"
										mt="10px"
										color="black"
									>
										{currency_id === "USD" ? "U$S" : "$"} {formatPrice(price)}{" "}
									</Box>
									{shipping?.free_shipping && (
										<Text
											color="meliGreen"
											fontWeight={600}
											fontSize="14px"
											m="0"
										>
											Envío gratis
										</Text>
									)}
								</Box>
								<Box pt="19px">
									<Flex align="flex-end" color="meliBlue">
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiFillStar />
										</Box>
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiFillStar />
										</Box>
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiFillStar />
										</Box>
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiFillStar />
										</Box>
										<Box fontSize="16px" w="16px" h="16px" mr="7px">
											<AiOutlineStar />
										</Box>
										<Box
											fontSize="13px"
											color="meliGray"
											w="16px"
											h="16px"
											minW="50px"
											mr="7px"
										>
											1397
										</Box>
									</Flex>
								</Box>
							</>
						)}
					</Flex>
				</Box>
			</Flex>
			<Box w="100%" borderBottom="thin solid #eee" />
		</Link>
	);
}

export default SearchedProductResults;

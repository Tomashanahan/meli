import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
	AiFillStar,
	AiOutlineStar,
	AiOutlineLike,
	AiOutlineDislike,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function ProductOpinions({ product_opinions }) {
	/*  */
	const calcStars = (rating, size) => {
		const fillStar = new Array(rating || 0);
		const emptyStar = new Array(5 - rating || 0);
		fillStar.fill();
		emptyStar.fill();
		if (size === "small") {
			return (
				<Flex align="flex-end">
					{fillStar?.map((e, i) => (
						<Box key={i} fontSize="16px" w="16px" h="16px" mr="7px">
							<AiFillStar />
						</Box>
					))}
					{emptyStar?.map((e, i) => (
						<Box key={i} fontSize="16px" w="16px" h="16px" mr="7px">
							<AiOutlineStar />
						</Box>
					))}
				</Flex>
			);
		} else if (size === "large") {
			return (
				<Flex align="flex-end">
					{fillStar?.map((e, i) => (
						<Box key={i} fontSize="20px" w="20px" h="20px" mr="7px">
							<AiFillStar />
						</Box>
					))}
					{emptyStar?.map((e, i) => (
						<Box key={i} fontSize="20px" w="20px" h="20px" mr="7px">
							<AiOutlineStar />
						</Box>
					))}
				</Flex>
			);
		}
	};

	const getComentDate = (date) => {
		const months = [
			"En",
			"Feb",
			"Mar",
			"Abr",
			"May",
			"Jun",
			"Jul",
			"Ago",
			"Sept",
			"Oct",
			"Nov",
			"Dic",
		];
		date = date.split("T")[0].split("-");
		let year = date[0];
		let month = date[1] < 10 && date[1][1];
		let day = date[2];

		return `${day} ${months[month-1]}. ${year}`;
	};

	const calSRatinOpinions = (rating) => {
		return rating * 100 / product_opinions?.paging?.total
	};

	return (
		<div>
			<Text textAlign="left" fontSize="28px" fontWeight={600} mr="10px">
				Opiniones del producto
			</Text>
			<Flex flexDirection={["column","column","column","column","column","row"]} justify="space-between">
				<Box color="meliBlue" w={["100%","100%","100%","50%","100%","30%"]} mb="50px">
					<Flex justify="space-between" align="center">
						<Text fontSize="47px" m="0" fontWeight={700} mr="18px">
							{product_opinions?.rating_average}
						</Text>
						<Stack align="self-start">
							{calcStars(Math.round(product_opinions?.rating_average), "large")}
							<Text
								color="#949494"
								fontWeight={400}
								fontSize="14px"
								style={{ marginTop: "6px" }}
							>
								{product_opinions?.paging?.total} calificaciones
							</Text>
						</Stack>
					</Flex>
					<Stack w="100%">
						<Flex align="center" justify="space-between">
							<Box w="80%" pos="relative">
								<Box borderRadius="100px" h="4px" bg="rgba(0,0,0,.1)" />
								<Box
									pos="absolute"
									top="0"
									borderRadius="100px"
									w={`${calSRatinOpinions(product_opinions?.rating_levels?.five_star)}%`}
									h="4px"
									bg="rgba(0,0,0,.55)"
								/>
							</Box>
							<Flex align="center" color="rgba(0,0,0,.55)" justify="center">
								<Text fontSize="14px" fontWeight={200} m="0">
									5
								</Text>
								<Box fontSize="12px" ml="4px" h="13px">
									<AiFillStar />
								</Box>
							</Flex>
						</Flex>
						<Flex align="center" justify="space-between">
							<Box w="80%" pos="relative">
								<Box borderRadius="100px" h="4px" bg="rgba(0,0,0,.1)" />
								<Box
									pos="absolute"
									top="0"
									borderRadius="100px"
									w={`${calSRatinOpinions(product_opinions?.rating_levels?.four_star)}%`}
									h="4px"
									bg="rgba(0,0,0,.55)"
								/>
							</Box>
							<Flex align="center" color="rgba(0,0,0,.55)" justify="center">
								<Text fontSize="14px" fontWeight={200} m="0">
									4
								</Text>
								<Box fontSize="12px" ml="4px" h="13px">
									<AiFillStar />
								</Box>
							</Flex>
						</Flex>
						<Flex align="center" justify="space-between">
							<Box w="80%" pos="relative">
								<Box borderRadius="100px" h="4px" bg="rgba(0,0,0,.1)" />
								<Box
									pos="absolute"
									top="0"
									borderRadius="100px"
									w={`${calSRatinOpinions(product_opinions?.rating_levels?.three_star)}%`}
									h="4px"
									bg="rgba(0,0,0,.55)"
								/>
							</Box>
							<Flex align="center" color="rgba(0,0,0,.55)" justify="center">
								<Text fontSize="14px" fontWeight={200} m="0">
									3
								</Text>
								<Box fontSize="12px" ml="4px" h="13px">
									<AiFillStar />
								</Box>
							</Flex>
						</Flex>
						<Flex align="center" justify="space-between">
							<Box w="80%" pos="relative">
								<Box borderRadius="100px" h="4px" bg="rgba(0,0,0,.1)" />
								<Box
									pos="absolute"
									top="0"
									borderRadius="100px"
									w={`${calSRatinOpinions(product_opinions?.rating_levels?.two_star)}%`}
									h="4px"
									bg="rgba(0,0,0,.55)"
								/>
							</Box>
							<Flex align="center" color="rgba(0,0,0,.55)" justify="center">
								<Text fontSize="14px" fontWeight={200} m="0">
									2
								</Text>
								<Box fontSize="12px" ml="4px" h="13px">
									<AiFillStar />
								</Box>
							</Flex>
						</Flex>
						<Flex align="center" justify="space-between">
							<Box w="80%" pos="relative">
								<Box borderRadius="100px" h="4px" bg="rgba(0,0,0,.1)" />
								<Box
									pos="absolute"
									top="0"
									borderRadius="100px"
									w={`${calSRatinOpinions(product_opinions?.rating_levels?.one_star)}%`}
									h="4px"
									bg="rgba(0,0,0,.55)"
								/>
							</Box>
							<Flex align="center" color="rgba(0,0,0,.55)" justify="center">
								<Text fontSize="14px" fontWeight={200} m="0">
									1
								</Text>
								<Box fontSize="12px" ml="4px" h="13px">
									<AiFillStar />
								</Box>
							</Flex>
						</Flex>
					</Stack>
				</Box>
				{/*  */}
				<Stack  w={["100%","100%","100%","100%","200%","60%"]}>
					{product_opinions?.reviews?.map(({ id, content, likes, rate, date_created }) => (
						<Box key={id}>
							<Flex justify="space-between" align="center" color="meliBlue">
								{calcStars(rate, "small")}
								<Text color="rgba(0,0,0,.55)" fontSize="12px">
									{getComentDate(date_created)}
								</Text>
							</Flex>
							<Box>
								<Text
									textAlign="left"
									color="rgba(0,0,0,.9)"
									fontSize="16px"
									fontWeight={400}
									mt="0"
								>
									{content}
								</Text>
								<Flex justify="space-between" align="center">
									<Flex justify="space-between" align="center"  w={["60%","60%","60%","30%","22%","37%"]}>
										<Flex
											justify="space-between"
											align="center"
											fontSize="12px"
											border="1px solid rgba(0,0,0,.55)"
											borderRadius="53px"
											color="rgba(0,0,0,.55)"
											p="0 11px"
											mr="5px"
											h="32px"
										>
											<Text fontWeight={600} mx="3px">
												Es útil
											</Text>
											<Box fontSize="16px" mt="3px" fontWeight={600} mx="3px">
												<AiOutlineLike />
											</Box>
											<Text fontWeight={600} ml="3px">
												{likes}
											</Text>
										</Flex>
										<Flex
											fontSize="16px"
											border="1px solid rgba(0,0,0,.55)"
											borderRadius="53px"
											color="rgba(0,0,0,.55)"
											mr="5px"
											h="32px"
											align="center"
											p="0 10px"
										>
											<AiOutlineDislike />
										</Flex>
									</Flex>
									<Flex align="center" color="#ccc" fontSize="25px">
										<BsThreeDotsVertical />
									</Flex>
								</Flex>
							</Box>
							<Box h="1px" w="97%" bg="#e8e8ec" m="auto" mt="24px" />
						</Box>
					))}
				</Stack>
			</Flex>
		</div>
	);
}

export default ProductOpinions;

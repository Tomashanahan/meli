import React from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Descriptioin from "../../Product Detail/Descriptioin";
import Price from "../../Product Detail/Price";
import Vendedor from "../../Product Detail/vendedor";
import ProductOpinions from "../../Product Detail/ProductOpinions";
import ProductQuestions from "../../Product Detail/ProductQuestions";

function ProductDetailResponsive({
	image,
	setImage,
	borderImage,
	setBorderImage,
	zoom,
	setZoom,
	imageZoom,
	setImageCarousel,
	product_detail,
	product_description,
	seller_data,
	product_questions,
	product_opinions,
	setShowImageCarousel,
}) {
	return (
		<Stack
			boxSizing="border-box"
			justify="space-between"
			p="20px"
			w="85%"
			m="auto"
			bg="white"
			boxShadow="0 1px 2px 0 rgb(0 0 0 / 25%)"
			borderRadius="4"
			mt="40px"
		>
			<Stack>
				{/*  */}
				<Text
					m={0}
					color="rgba(0,0,0,.55)"
					fontSize="14px"
					textAlign="left"
					fontWeight={400}
					textTransform="capitalize"
				>
					{product_detail?.condition} | {product_detail?.sold_quantity} vendidos
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
						{product_detail?.title}
					</Text>
				</Flex>
				{/*  */}
				<Flex h="fit-content" minH="600px">
					{/* product_detail?.pictures */}
					<Flex w="100%" justify="center">
						<Box
							id={"img-zoom-container"}
							pos="relative"
							cursor="zoom-in"
							onMouseMove={() => {
								setZoom(true);
								imageZoom("myimage", "myresult");
							}}
							onMouseLeave={() => setZoom(false)}
						>
							<Image
								h="500px"
								w="500px"
								id="myimage"
								objectFit="contain"
								src={
									image === undefined
										? product_detail?.pictures &&
										  product_detail?.pictures[0]?.url
										: image
								}
								alt="image"
								onClick={() => {
									setShowImageCarousel(true)
									setImageCarousel({
										urlCurrentImage: product_detail?.pictures[7]?.url,
										allImages: product_detail?.pictures,
									});
								}}
							/>
						</Box>
					</Flex>
				</Flex>
				<Price product_detail={product_detail} />
				<Box>
					<Box
						w="100%"
						pt="30px"
						m="auto"
						alignSelf="center"
						borderBottom="1px solid rgba(0,0,0,.1)"
						h="3px"
					/>
					<Descriptioin product_description={product_description} />
					<Vendedor product_detail={product_detail} seller_data={seller_data} />
					<Box
						w="100%"
						m="auto"
						mt="30px"
						alignSelf="center"
						borderBottom="1px solid rgba(0,0,0,.1)"
						h="3px"
					/>
					<ProductQuestions product_questions={product_questions} />
					<Box
						w="100%"
						m="auto"
						mt="30px"
						alignSelf="center"
						borderBottom="1px solid rgba(0,0,0,.1)"
						h="3px"
					/>
					{product_opinions?.reviews?.length > 0 && (
						<ProductOpinions product_opinions={product_opinions} />
					)}
				</Box>
			</Stack>
		</Stack>
	);
}

export default ProductDetailResponsive;

import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect } from "react";
import Descriptioin from "./Descriptioin";
import Price from "./Price";
import Vendedor from "./vendedor";
import ProductOpinions from "./ProductOpinions";
import ProductQuestions from "./ProductQuestions";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { useState } from "react";
import "../../index.css";
import { useRef } from "react";
import ImageCarousel from "./ImageCarousel";

function Detail() {
	const {
		getProductDetail,
		product_detail,
		dispatch,
		getProductDescription,
		product_description,
		seller_data,
		getProductQuestions,
		product_questions,
		product_opinions,
		getProductOpinions,
	} = useContext(ProductsContext);
	const [image, setImage] = useState();
	const [borderImage, setBorderImage] = useState();
	const [zoom, setZoom] = useState(false);
	const imagen = useRef();
	const img_zoom_lens = useRef();
	const [imageCarousel, setImageCarousel] = useState({});
	const [showImageCarousel, setShowImageCarousel] = useState(false);
	console.log(product_detail)
	/*  */
	function imageZoom(imgID, resultID) {
		var img, lens, result, cx, cy;
		img = document.getElementById(imgID);
		result = document.getElementById(resultID);
		/* Create lens: */
		lens = img_zoom_lens.current;

		cx = result.offsetWidth / lens.offsetWidth;
		cy = result.offsetHeight / lens.offsetHeight;

		result.style.backgroundImage = "url('" + img.src + "')";
		result.style.backgroundSize =
			img.width * cx + "px " + img.height * cy + "px";
		lens.addEventListener("mousemove", moveLens);
		img.addEventListener("mousemove", moveLens);
		lens.addEventListener("touchmove", moveLens);
		img.addEventListener("touchmove", moveLens);

		function moveLens(e) {
			var pos, x, y;
			e.preventDefault();
			pos = getCursorPos(e);

			x = pos.x - lens.offsetWidth / 2;
			y = pos.y - lens.offsetHeight / 2;
			if (x > img.width - lens.offsetWidth) {
				x = img.width - lens.offsetWidth;
			}
			if (x < 0) {
				x = 0;
			}
			if (y > img.height - lens.offsetHeight) {
				y = img.height - lens.offsetHeight;
			}
			if (y < 0) {
				y = 0;
			}
			/* Set the position of the lens: */
			lens.style.left = x + "px";
			lens.style.top = y + "px";
			/* Display what the lens "sees": */
			imagen.current.style.backgroundPosition =
				"-" + x * cx + "px -" + y * cy + "px";
			imagen.current.style.backgroundRepeat = "no-repeat";
		}
		function getCursorPos(e) {
			var a,
				x = 0,
				y = 0;
			e = e || window.event;
			/* Get the x and y positions of the image: */
			a = img.getBoundingClientRect();
			/* Calculate the cursor's x and y coordinates, relative to the image: */
			x = e.pageX - a.left;
			y = e.pageY - a.top;
			/* Consider any page scrolling: */
			x = x - window.pageXOffset;
			y = y - window.pageYOffset;
			return { x: x, y: y };
		}
	}
	/*  */
	useLayoutEffect(() => {
		dispatch(getProductDetail("MLA1139507191"));
		dispatch(getProductDescription("MLA1139507191"));
		dispatch(getProductQuestions("MLA1139507191"));
		dispatch(getProductOpinions("MLA1139507191"));
	}, []);

	return (
		<>
			{showImageCarousel && (
				<ImageCarousel images={imageCarousel} setShow={setShowImageCarousel} />
			)}
			<Flex
				boxSizing="border-box"
				justify="space-between"
				p="20"
				w="85%"
				m="auto"
				bg="#FFFF"
				boxShadow="0 1px 2px 0 rgb(0 0 0 / 25%)"
				borderRadius="4"
				my="40"
			>
				<Stack>
					<Flex h="fit-content" minH="600px">
						<Stack>
							{product_detail?.pictures?.length > 7
								? product_detail?.pictures?.slice(0, 7)?.map(({ id, url }) => (
										<Image
											onMouseEnter={(e) => {
												setImage(url);
												setBorderImage(e.target.id);
											}}
											boxSizing="border-box"
											cursor="pointer"
											border={
												borderImage === id
													? "2px solid #3483fa"
													: "1px solid rgba(0,0,0,.25)"
											}
											key={url}
											id={
												borderImage === undefined
													? setBorderImage(product_detail?.pictures[0]?.id)
													: id
											}
											borderRadius="6px"
											p="4"
											h="50px"
											w="50px"
											src={url}
											alt="profucto_1"
											objectFit={"contain"}
										/>
								  ))
								: product_detail?.pictures?.map(({ id, url }) => (
										<Image
											onMouseEnter={(e) => {
												setImage(url);
												setBorderImage(e.target.id);
											}}
											boxSizing="border-box"
											cursor="pointer"
											border={
												borderImage === id
													? "2px solid #3483fa"
													: "1px solid rgba(0,0,0,.25)"
											}
											key={url}
											id={
												borderImage === undefined
													? setBorderImage(product_detail?.pictures[0]?.id)
													: id
											}
											borderRadius="6px"
											p="4"
											h="50px"
											w="50px"
											src={url}
											alt="profucto_1"
											objectFit={"contain"}
										/>
								  ))}
							{product_detail?.pictures?.length > 7 && (
								<Box
									pos="relative"
									border="1px solid rgba(0,0,0,.25)"
									h="50px"
									borderRadius="6px"
									w="50px"
								>
									<Box
										color="#3483fa"
										pos="absolute"
										top="50%"
										transform="translate(-50%,-50%)"
										left="50%"
										fontSize="25px"
										fontWeight={400}
									>
										+{product_detail?.pictures?.length - 6}
									</Box>
									<Image
										opacity={0.2}
										onMouseEnter={(e) => {
											setImage(product_detail?.pictures[7]?.url);
											setBorderImage(e.target.id);
										}}
										boxSizing="border-box"
										cursor="pointer"
										border={
											borderImage === product_detail?.pictures[7]?.id &&
											"2px solid #3483fa"
										}
										p="4"
										id={product_detail?.pictures[7]?.id}
										h="50px"
										w="50px"
										src={product_detail?.pictures[7]?.url}
										alt="profucto_1"
										objectFit={"contain"}
									/>
								</Box>
							)}
						</Stack>
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
								{zoom && (
									<Box
										ref={img_zoom_lens}
										pos="absolute"
										bg="rgba(0,0,0,.43)"
										w="182px"
										h="182px"
										onClick={(e) => {
											setShowImageCarousel(true);
											window.scrollTo(0, 0);
											setImageCarousel({
												urlCurrentImage:
													image === undefined
														? product_detail?.pictures &&
														  product_detail?.pictures[0]?.url
														: image,
												allImages: product_detail?.pictures,
											});
										}}
									/>
								)}
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
								/>
							</Box>
						</Flex>
					</Flex>
					<Box px="45px">
						<Box
							w="100%"
							pt="30px"
							m="auto"
							alignSelf="center"
							borderBottom="1px solid rgba(0,0,0,.1)"
							h="3px"
						/>
						<Descriptioin product_description={product_description} />
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
						{product_opinions?.reviews?.length > 0 && <ProductOpinions product_opinions={product_opinions} />}
					</Box>
				</Stack>
				<Stack pos="relative">
					{zoom && (
						<Box
							id="myresult"
							ref={imagen}
							pos="absolute"
							r="0"
							top="8px"
							border="1px solid #d4d4d4"
							w="100%"
							h="500px"
							backgroundSize="1650px 2400px"
							zIndex={1000}
						/>
					)}
					<Price product_detail={product_detail} />
					<Vendedor product_detail={product_detail} seller_data={seller_data} />
				</Stack>
			</Flex>
		</>
	);
}

export default Detail;

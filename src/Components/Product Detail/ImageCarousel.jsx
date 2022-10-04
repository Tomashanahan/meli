import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from "react-icons/io";

function ImageCarousel({ images, setShow }) {
	// const { setShowImageCarousel } = setShow;
	// console.log(setShowImageCarousel);
	const { urlCurrentImage, allImages } = images;
	const [imageScale, setImageScale] = useState(1);
	const [currentImg, setCurrentImg] = useState();

	const nexImg = (_currentImg) => {
		console.log(_currentImg);
		let currentIndex = allImages
			?.map((e, i) => e.url === _currentImg && i)
			.filter((e) => e !== false)[0];

		setCurrentImg((e) => ({
			index: currentIndex >= allImages.length - 1 ? 0 : e.index + 1,
			url: allImages[e.index >= allImages.length - 1 ? 0 : e.index + 1]?.url,
		}));
	};

	const prevImg = (_currentImg) => {
		console.log(_currentImg);
		let currentIndex = allImages
			?.map((e, i) => e.url === _currentImg && i)
			.filter((e) => e !== false)[0];

		setCurrentImg((e) => ({
			index: currentIndex <= 0 ? allImages.length - 1 : e.index - 1,
			url: allImages[e.index <= 0 ? allImages.length - 1 : e.index - 1]?.url,
		}));
	};

	useEffect(() => {
		let index = allImages
			?.map((e, i) => e.url === urlCurrentImage && i)
			.filter((e) => e !== false)[0];

		setCurrentImg(
			index !== undefined &&
				allImages !== undefined && { url: allImages[index]?.url, index }
		);
	}, []);

	function logit(e) {
		console.log(e);
		e.preventDefault();
		e.stopPropagation();

		return false;
		// setShow(window.pageYOffset > 0 && false);
	}
	function preventScroll(e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	const keyPress = (e) => {
		console.log(e)
		const key = e.key;
		if (key === "ArrowRight") {
			nexImg(currentImg.url);
		} else if (key === "ArrowLeft") {
			prevImg(currentImg.url);
		} else if (key === "ArrowDown") {
			e.preventDefault()
		} else if (key === "Escape") {
			setShow(false)
		}
	};

	useEffect(() => {
		function watchScroll() {
			window.addEventListener("wheel", preventScroll, { passive: false });
			window.addEventListener("keydown", keyPress);
		}
		watchScroll();
		return () => {
			// window.removeEventListener("scroll", logit);
			window.removeEventListener("wheel", preventScroll, { passive: false });
			window.removeEventListener("keydown", keyPress);
		};
	});

	return (
		<Flex
			pos="absolute"
			w="100%"
			bg="rgba(0,0,0, .8)"
			h="100vh"
			zIndex={20000}
			top="0"
			justify="space-between"
			align="center"
			overflow="hidden"
			m="0"
		>
			<Flex
				pos="absolute"
				justify="center"
				cursor="pointer"
				align="center"
				top="41px"
				right="46px"
				w="32px"
				h="32px"
				color="#FFFF"
				fontSize="40px"
				bg="rgba(0,0,0, .25)"
        onClick={() => setShow(false)}
			>
				<IoMdClose />
			</Flex>
			<Flex
				align="center"
				justify="center"
				color="#FFFF"
				bg="rgba(0,0,0, .25)"
				px="10px"
				borderRadius="12px"
				fontSize="12px"
				h="24px"
				pos="absolute"
				top="46px"
				left="46px"
			>
				{currentImg?.index + 1} / {allImages?.length}
			</Flex>
			<Flex justify="space-between" align="center" w="100%">
				<Flex
					justify="center"
					cursor="pointer"
					align="center"
					ml="46px"
					color="#FFF"
					h="50px"
					w="50px"
					bg="rgba(0,0,0, .25)"
					fontSize="40px"
					onClick={() => prevImg(currentImg?.url)}
				>
					<IoIosArrowBack />
				</Flex>
				<Image
					transform={`scale(${imageScale})`}
					onClick={() => setImageScale(imageScale === 1 ? 1.5 : 1)}
					cursor={imageScale === 1 ? "zoom-in" : "zoom-out"}
					w="600px"
					src={currentImg?.url && currentImg?.url}
				/>
				<Flex
					justify="center"
					cursor="pointer"
					align="center"
					mr="46px"
					color="#FFF"
					h="50px"
					w="50px"
					bg="rgba(0,0,0, .25)"
					fontSize="40px"
					onClick={() => nexImg(currentImg?.url)}
				>
					<IoIosArrowForward />
				</Flex>
			</Flex>
		</Flex>
	);
}

export default ImageCarousel;

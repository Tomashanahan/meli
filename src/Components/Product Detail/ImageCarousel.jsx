import { Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from "react-icons/io";

function ImageCarousel({ images, setShow }) {
	const img = useRef();
	const prev = useRef();
	const next = useRef();
	const { urlCurrentImage, allImages } = images;
	const [imageScale, setImageScale] = useState(1);
	const [currentImg, setCurrentImg] = useState();

	const nexImg = (_currentImg) => {
		let currentIndex = allImages
			?.map((e, i) => e.url === _currentImg && i)
			.filter((e) => e !== false)[0];

		setCurrentImg((e) => ({
			index: currentIndex >= allImages.length - 1 ? 0 : e.index + 1,
			url: allImages[e.index >= allImages.length - 1 ? 0 : e.index + 1]?.url,
		}));
	};

	const prevImg = (_currentImg) => {
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

	function preventScroll(e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	const keyPress = (e) => {
		const key = e.key;
		if (key === "ArrowRight") {
			setImageScale(1);
			nexImg(currentImg.url);
		} else if (key === "ArrowLeft") {
			setImageScale(1);
			prevImg(currentImg.url);
		} else if (key === "ArrowDown") {
			e.preventDefault();
		} else if (key === "Escape") {
			setShow(false);
		}
	};

	const closeImg = (e) => {
		if (
			!img.current.contains(e.target) &&
			!prev.current.contains(e.target) &&
			!next.current.contains(e.target)
		) {
			setShow(false);
		}
	};

	useEffect(() => {
		function watchScroll() {
			window.addEventListener("wheel", preventScroll, { passive: false });
			window.addEventListener("keydown", keyPress);
			window.addEventListener("click", closeImg);
		}
		watchScroll();
		return () => {
			window.removeEventListener("click", closeImg);
			window.removeEventListener("wheel", preventScroll, { passive: false });
			window.removeEventListener("keydown", keyPress);
		};
	});

	return (
		<Flex
			pos="absolute"
			_focus={{ outline: "none" }}
			css={{
				"::-moz-selection": {
					backgroundColor: "red",
				},
				"-webkit-user-select": "none",
				"-moz-user-select": "none",
				"-khtml-user-select": "none",
				"-ms-user-select": "none",
			}}
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
					ref={prev}
				>
					<IoIosArrowBack />
				</Flex>
				<Image
					ref={img}
					transform={`scale(${imageScale})`}
					onClick={() => setImageScale(imageScale === 1 ? 1.5 : 1)}
					cursor={imageScale === 1 ? "zoom-in" : "zoom-out"}
					objectFit="contain"
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
					ref={next}
				>
					<IoIosArrowForward />
				</Flex>
			</Flex>
		</Flex>
	);
}

export default ImageCarousel;

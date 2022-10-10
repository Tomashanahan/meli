import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import regexifyString from "regexify-string";

function Descriptioin({ product_description }) {
	const { plain_text } = product_description;
	var expression =
		/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

	let urlTags = plain_text?.split("\n").map((e) => {
		const m = regexifyString({
			pattern: expression,
			decorator: (match, index) => {
				return (
					<Link key={match} _visited={{color: "#000"}} href={match} target="_blank" rel="noreferrer">
						{match}
					</Link>
				);
			},
			input: e,
		})
		return m
	});

	return (
		<Box>
			<Text
				textAlign="left"
				fontWeight={400}
				fontSize="24px"
				fontFamily="Proxima Nova"
			>
				Descripción
			</Text>
			<Text
				fontFamily="Proxima Nova"
				color="meliLightGray"
				wordBreak="break-word"
				fontSize="20px"
				textAlign="left"
			>
				{urlTags?.reduce((total, line) => [total, <br key={line} />, line])}
			</Text>
		</Box>
	);
}

export default Descriptioin;

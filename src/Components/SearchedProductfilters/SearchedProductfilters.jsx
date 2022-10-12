import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function SearchedProductfilters({
	name,
	values,
	formatPrice,
	addFilterQuerysToParams,
	filterNameID,
	setFilterName,
	setShowAllfilters,
	searchedProductQuery,
}) {
	const [params, setParams] = useSearchParams();
	return (
		<Box>
			<Text
				color="meliGray"
				fontSize="16px"
				fontWeight={600}
				mt="30px"
				mb="10px"
				lineHeight={1.25}
			>
				{name}
			</Text>
			{values?.length > 9
				? values?.slice(0, 9)?.map(({ id, name, results }) => (
						<Text
							key={id}
							color="meliLightGray"
							cursor="pointer"
							fontSize="14px"
							fontWeight={400}
							m="0 0 6px"
							onClick={(e) => {
								e.preventDefault();
								params.set("offset", 0);
								params.set("pagina", 1);
								setParams(params);
								window.scrollTo(0, 0);
								addFilterQuerysToParams(
									searchedProductQuery,
									filterNameID,
									id,
									name
								);
							}}
						>
							{name}{" "}
							<Text as="span" color="#999">
								({formatPrice(results)})
							</Text>
						</Text>
				  ))
				: values?.map(({ id, name, results }) => (
						<Link
							key={id}
							to={`/searchedProducts?${params}`}
							onClick={(e) => {
								e.preventDefault();
								params.set("offset", 0);
								params.set("pagina", 1);
								setParams(params);
								addFilterQuerysToParams(
									searchedProductQuery,
									filterNameID,
									id,
									name
								);
							}}
							style={{ width: "30%" }}
						>
							<Text
								color="meliLightGray"
								cursor="pointer"
								fontSize="14px"
								fontWeight={400}
								m="0 0 6px"
							>
								{name}{" "}
								<Text as="span" color="#999">
									({formatPrice(results)})
								</Text>
							</Text>
						</Link>
				  ))}
			{values?.length > 9 && (
				<Text
					as="span"
					color="meliBlue"
					fontWeight={400}
					id={name}
					onClick={(e) => {
						window.scrollTo(0, 0);
						setFilterName(name);
						setShowAllfilters(true);
					}}
					cursor="pointer"
				>
					Mostrar más
				</Text>
			)}
		</Box>
	);
}

export default SearchedProductfilters;

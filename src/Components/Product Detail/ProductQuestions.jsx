import React, { useState } from "react";
import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import { TbHelp } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

function ProductQuestions({ product_questions }) {
	const [seeAllQuestions, setSeeAllQuestions] = useState(5);

	return (
		<Box>
			<Text textAlign="left" fontSize="24px" fontWeight={400} mr="10px">
				Preguntas y respuestas
			</Text>
			<Box>
				<Text textAlign="left" fontSize="18px" fontWeight={600} mr="10px">
					¿Qué querés saber?
				</Text>
				<Box textAlign="left">
					<Button
						mr="10px"
						bg="rgba(65,137,230,.15)"
						color="#3483fa"
						fontWeight={600}
						fontFamily="Proxima Nova"
						fontSize="14px"
						border="none"
						borderRadius="5px"
						p="6px 11px"
					>
						Costo y tiempo de envío
					</Button>
					<Button
						mx="5px"
						bg="rgba(65,137,230,.15)"
						color="#3483fa"
						fontWeight={600}
						fontFamily="Proxima Nova"
						fontSize="14px"
						border="none"
						borderRadius="5px"
						p="6px 11px"
					>
						Devoluciones gratis
					</Button>
					<Button
						mx="5px"
						bg="rgba(65,137,230,.15)"
						color="#3483fa"
						fontWeight={600}
						fontFamily="Proxima Nova"
						fontSize="14px"
						border="none"
						borderRadius="5px"
						p="6px 11px"
					>
						Medios de pago y promociones
					</Button>
					<Button
						mx="10px"
						bg="rgba(65,137,230,.15)"
						color="#3483fa"
						fontWeight={600}
						fontFamily="Proxima Nova"
						fontSize="14px"
						border="none"
						borderRadius="5px"
						p="6px 11px"
					>
						Garantía
					</Button>
					<Button
						mt="20px"
						bg="rgba(65,137,230,.15)"
						color="#3483fa"
						fontWeight={600}
						fontFamily="Proxima Nova"
						fontSize="14px"
						border="none"
						borderRadius="5px"
						p="6px 11px"
					>
						Cuotas sin tarjeta
					</Button>
				</Box>
			</Box>

			<Box textAlign="left" mt="40px">
				<Text fontSize="18px" fontWeight={600} mr="10px">
					Buscá lo que querés saber
				</Text>
				<Flex
					align="center"
					pos="relative"
					minH="48px"
					borderRadius="0.375em"
					border="1px solid rgba(0,0,0,.25)"
				>
					<Input
						w="90%"
						_focus={{ outline: "none" }}
						border="none"
						pl="16px"
						placeholder="Escribí una pregunta o palabra clave..."
						_placeholder={{ fontFamily: "Proxima Nova", fontSize: "16px" }}
					/>
					<Button
						cursor={"pointer"}
						m="0"
						bg="#3483fa"
						position="absolute"
						boxSizing="border-box"
						top="0"
						right="0"
						b="0"
						p="15px 0"
						border="none"
						textAlign="center"
						h="49px"
						color="#FFFF"
						fontSize="18px"
						w="64px"
						borderBottomRightRadius="4px"
						borderTopRightRadius="4px"
					>
						<GoSearch />
					</Button>
				</Flex>
				{product_questions?.questions?.length && (
					<>
						<Box mt="40px">
							<Text>Últimas realizadas</Text>
							{product_questions?.questions
								?.slice(0, seeAllQuestions)
								.map(({ id, text, answer }) => (
									<Box mt="24px" key={id}>
										<Text fontSize="16px" color="rgba(0,0,0,.9)" m="0">
											{text}
										</Text>
										<Flex mt="8px" color="rgba(0,0,0,.55)" ml="12px">
											<Box
												h="12px"
												w="12px"
												borderBottom="1px solid rgba(0,0,0,.25)"
												fontSize="16px"
												borderLeft="1px solid rgba(0,0,0,.25)"
											/>
											<Stack ml="8px">
												<Text m="0">{answer.text}</Text>
											</Stack>
										</Flex>
									</Box>
								))}
						</Box>
						{seeAllQuestions && (
							<Flex
								mt="10px"
								color="#3483fa"
								fontWeight={600}
								align="center"
								fontSize="18px"
								cursor="pointer"
								onClick={() => setSeeAllQuestions()}
							>
								Ver {product_questions?.questions?.length - 5} resultados más
								<Box mt="8px" ml="10px">
									<IoIosArrowDown />
								</Box>
							</Flex>
						)}
						<Button
							mt="20px"
							cursor="pointer"
							borderRadius="4px"
							border="none"
							color={"#3483fa"}
							bg="rgba(65,137,230,.15)"
							fontWeight={600}
							fontSize="14px"
							w="45%"
							px="24px"
						>
							<Flex justify="center" align="center">
								<Box fontSize="18px" mt="3px">
									<TbHelp />
								</Box>
								<Text ml="10px">¿Cómo le pregunto al vendedor?</Text>
							</Flex>
						</Button>
					</>
				)}
				{/* <Box mt="40px">
					<Text>Últimas realizadas</Text>
					{product_questions?.questions
						?.slice(0, seeAllQuestions)
						.map(({ id, text, answer }) => (
							<Box mt="24px" key={id}>
								<Text fontSize="16px" color="rgba(0,0,0,.9)" m="0">
									{text}
								</Text>
								<Flex mt="8px" color="rgba(0,0,0,.55)" ml="12px">
									<Box
										h="12px"
										w="12px"
										borderBottom="1px solid rgba(0,0,0,.25)"
										fontSize="16px"
										borderLeft="1px solid rgba(0,0,0,.25)"
									/>
									<Stack ml="8px">
										<Text m="0">{answer.text}</Text>
									</Stack>
								</Flex>
							</Box>
						))}
				</Box>
				{seeAllQuestions && (
					<Flex
						mt="10px"
						color="#3483fa"
						fontWeight={600}
						align="center"
						fontSize="18px"
						cursor="pointer"
						onClick={() => setSeeAllQuestions()}
					>
						Ver {product_questions?.questions?.length - 5} resultados más
						<Box mt="8px" ml="10px">
							<IoIosArrowDown />
						</Box>
					</Flex>
				)}
				<Button
					mt="20px"
					cursor="pointer"
					borderRadius="4px"
					border="none"
					color={"#3483fa"}
					bg="rgba(65,137,230,.15)"
					fontWeight={600}
					fontSize="14px"
					w="45%"
					px="24px"
				>
					<Flex justify="center" align="center">
						<Box fontSize="18px" mt="3px">
							<TbHelp />
						</Box>
						<Text ml="10px">¿Cómo le pregunto al vendedor?</Text>
					</Flex>
				</Button> */}
			</Box>
		</Box>
	);
}

export default ProductQuestions;

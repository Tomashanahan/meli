import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function ProductOpinions() {
	return (
		<div>
			<Text textAlign="left" fontSize="28px" fontWeight={600} mr="10px">
				Opiniones del producto
			</Text>
			<Flex justify="space-between">
				<Box color="#3483fa" w="30%">
					<Flex justify="space-between" align="center">
						<Text fontSize="47px" m="0" fontWeight={700} mr="18px">
							4.9
						</Text>
						<Stack align="self-start">
							<Flex align="flex-end">
								<Box fontSize="20px" w="20px" h="20px" mr="7px">
									<AiFillStar />
								</Box>
								<Box fontSize="20px" w="20px" h="20px" mr="7px">
									<AiFillStar />
								</Box>
								<Box fontSize="20px" w="20px" h="20px" mr="7px">
									<AiFillStar />
								</Box>
								<Box fontSize="20px" w="20px" h="20px" mr="7px">
									<AiFillStar />
								</Box>
								<Box fontSize="20px" w="20px" h="20px" mr="7px">
									<AiFillStar />
								</Box>
							</Flex>
							<Text
								color="#949494"
								fontWeight={400}
								fontSize="14px"
								style={{ marginTop: "6px" }}
							>
								364 calificaciones
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
									w="30%"
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
									w="30%"
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
									w="40%"
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
									w="50%"
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
									w="60%"
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
				<Stack w="60%">
					<Box>
						<Flex justify="space-between" align="center" color="#3483fa">
							<Flex align="flex-end">
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
									<AiFillStar />
								</Box>
							</Flex>
							<Text color="rgba(0,0,0,.55)" fontSize="12px">
								10 Jan. 2020
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
								Excelente como todo lo que produce apple. Pasé de un iphone 7 a
								un phone 11 (común), no hay grandes cambios, excepto porque es
								más grande la pantalla, tiene más opciones de fotos (dos
								cámaras, aún lo estoy explorando jaja), face id, el resto es
								prácticamente es lo mismo. Como contra para mi es que me resultó
								mucho más pesado que el 7 y a ser más grande se me complica
								manejarlo con una sola mano (que es muy necesario para mi que
								soy mamá jajaja). Pero no cambiaría iphone por ninguna otra
								marca, es un teléfono excelente en todos los aspectos.
							</Text>
							<Flex justify="space-between" align="center">
								<Flex justify="space-between" align="center" w="37%">
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
											74
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
					{/*  */}
					<Box>
						<Flex justify="space-between" align="center" color="#3483fa">
							<Flex align="flex-end">
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
									<AiFillStar />
								</Box>
							</Flex>
							<Text color="rgba(0,0,0,.55)" fontSize="12px">
								10 Jan. 2020
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
								Excelente como todo lo que produce apple. Pasé de un iphone 7 a
								un phone 11 (común), no hay grandes cambios, excepto porque es
								más grande la pantalla, tiene más opciones de fotos (dos
								cámaras, aún lo estoy explorando jaja), face id, el resto es
								prácticamente es lo mismo. Como contra para mi es que me resultó
								mucho más pesado que el 7 y a ser más grande se me complica
								manejarlo con una sola mano (que es muy necesario para mi que
								soy mamá jajaja). Pero no cambiaría iphone por ninguna otra
								marca, es un teléfono excelente en todos los aspectos.
							</Text>
							<Flex justify="space-between" align="center">
								<Flex justify="space-between" align="center" w="37%">
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
											74
										</Text>
									</Flex>
									<Flex
										fontSize="16px"
										border="1px solid rgba(0,0,0,.55)"
										borderRadius="53px"
										color="rgba(0,0,0,.55)"
										p="0 11px"
										mr="5px"
										h="32px"
										align="center"
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
				</Stack>
			</Flex>
		</div>
	);
}

export default ProductOpinions;

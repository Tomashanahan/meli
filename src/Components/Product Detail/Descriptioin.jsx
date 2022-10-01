import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Descriptioin() {
	let probando = `Nueva apariencia digna de un Note
Conocé el Galaxy S22 Ultra, con el poder de Note. El marco pulido, delgado y audaz, rodea la forma extruida para lograr una simetría elegante. Y la cámara lineal, acentuada por anillos de lentes espejados, parece flotar en su lugar.

El primer Galaxy S con S Pen integrado
El S Pen se adapta directamente en la S por primera vez. Expulsalo desde la parte inferior del smartphone para escribir, hacer un dibujo o controlar tu smartphone. La latencia mejorada en Samsung Notes hace que cada pincelada se sienta tan natural como la tinta en papel, y podés convertir esas ideas escritas apresuradamente en texto legible.

RENDIMIENTO
Un salto épico para la tecnología de smartphones
PROCESADOR DE 4 NM: Un chip más rápido que nunca en Galaxy. El chip de 4 nm funciona con su poder de clase mundial en casi todos los aspectos de tu smartphone, lo que resulta en tomas nocturnas épicas, fotos increíblemente claras de día y de noche y una experiencia de juego móvil optimizada para conducirte a la victoria.

PANTALLA
Nuestra pantalla más brillante para el día más soleado. La pantalla Dynamic AMOLED 2X con Vision Booster es la peor pesadilla del resplandor, con 1750 nits en su punto máximo. Y la frecuencia de actualización adaptable de 120 Hz mantiene el desplazamiento suave, ajustándose a lo que aparece en la pantalla para una vista optimizada.

BATERÍA
Disfrutá todo el día y aprovechá al máximo tu noche. La IA mejorada toma 5000 mAh (normal) de potencia de un día al otro, adaptándose de manera inteligente a la forma en que usás tu smartphone.
Carga ultra rápida: A toda velocidad. Obtené una carga ultra rápida que dura más que el día cuando se conecta al adaptador de corriente de 45 W.

CÁMARA GALAXY DE NIVEL PROFESIONAL
Tomá la mejor imagen. Con los enormes sensores de píxeles y los píxeles que cambian de forma, este smartphone tiene nuestra cámara de nivel profesional más avanzada hasta el momento y la potencia de un kit profesional en un dispositivo portátil. Tomá fotos en la noche sin sacrificar la calidad.

VIDEOS NOCTURNOS
La cámara nocturna hace magia sin importar la hora. Se trata de la mayor evolución en nuestra tecnología de video. La velocidad de fotogramas automática detecta la iluminación y se ajusta a una velocidad óptima de fps automáticamente. Gracias al procesador de 4 nm con Super Night Solution, que elimina el ruido de cada fotograma, vas a poder grabar desde el amanecer hasta el anochecer con un nivel de detalle constante e impresionante.

RETRATOS DE NOCHE
Cámara nocturna te permite fotografiar en condiciones de poca luz
El brillo de la IA ilumina las fotos oscuras tanto en la cámara gran angular de 108 MP como en la cámara selfie de 40 MP. Super Night Solution aclara la escena de forma inteligente para poder aprovechar la noche y estilizar sus fotografías en modo Retrato sin perder detalles.


ZOOM ESPACIAL
Zoom de 100x 100 % épico. Una colección de tres vistas que ofrece la representación visual de cómo funciona el sistema de Tele Zoom, comenzando con una mujer que se encuentra en la distancia rodeada de plantas y árboles. Se aleja para formar parte de una colección de tres perspectivas nítidas y claras que se acercan más en la misma galería.

El sistema Dual Tele Zoom ofrece un potente zoom óptico, que pasa de 3x a 10x cuanto más se acerca. Además, el revolucionario objetivo de doble pliegue y la Superresolución mejorada con IA siguen avanzando, hasta que te acercás 100 veces más a la acción sin dar un solo paso.`;

	let x = probando.split(". ");

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
				color="#666"
				wordBreak="break-word"
				fontSize="20px"
				textAlign="left"
			>
				{x.map((e) => (
					<p key={e}>{e + "."}</p>
				))}
			</Text>
		</Box>
	);
}

export default Descriptioin;

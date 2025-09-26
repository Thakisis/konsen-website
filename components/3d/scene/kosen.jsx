import {
	Text3D,
	Center,
	MeshTransmissionMaterial,
	RoundedBox,
	Image,
} from "@react-three/drei";

import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const config = {
	backside: true,
	backsideThickness: 0.15,
	samples: 16,
	resolution: 1024,
	transmission: 1,
	clearcoat: 1,
	clearcoatRoughness: 0.0,
	thickness: 0.3,
	chromaticAberration: 0.15,
	anisotropy: 0.25,
	roughness: 0,
	distortion: 0.5,
	distortionScale: 0.1,
	temporalDistortion: 0,
	ior: 1.25,
	color: "#58e44b",
};

function Kosen({ children, ...props }) {
	const texture = useLoader(TextureLoader, "/bg.png");
	return (
		<>
			<Image
				url="/Oficinas.jpg"
				alt="code"
				position={[0, 0, -2]}
				scale={[15, 10, 1]}
			/>
			<group position={[-0.7, 1, 0]}>
				<RoundedBox args={[0.47, 0.2, 0.6]}>
					<meshPhysicalMaterial
						color="#e5ff00"
						metalness={0}
						transmission={1}
						ior={1.5}
						clearcoat={1}
					/>
				</RoundedBox>
			</group>
			<Center scale={[0.5, 0.5, 0.5]}>
				<Text3D
					castShadow
					bevelEnabled
					font={`/kosen.json`}
					scale={4}
					letterSpacing={0.1}
					height={0.25}
					bevelSize={0.01}
					bevelSegments={10}
					curveSegments={128}
					bevelThickness={0.01}
					{...props}
				>
					{children}
					<MeshTransmissionMaterial {...config} background={texture} />
				</Text3D>
			</Center>
		</>
	);
}

export default Kosen;

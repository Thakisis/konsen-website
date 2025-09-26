import { OrbitControls } from "@react-three/drei";
export default function Controls() {
	return (
		<OrbitControls
			autoRotate={true}
			autoRotateSpeed={-0.1}
			zoomSpeed={0.25}
			minZoom={40}
			maxZoom={140}
			enablePan={false}
			dampingFactor={0.05}
			minPolarAngle={Math.PI / 3}
			maxPolarAngle={Math.PI / 3}
		/>
	);
}

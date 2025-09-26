"use client";

import { Canvas as Canvas3d, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import Scene from "./scene";

import Env from "./env";
export default function Canvas() {
	return (
		<Canvas3d
			antialiasing="false"
			className="fixed top-0 left-0  inset-0 z-1"
			shadows
			eventSource={document.body}
			eventPrefix="client"
			camera={{ position: [20, 0.9, 20], fov: 26 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<color attach="background" args={["#101010"]} />
			<Rig />
			<Scene />
			<Env />
		</Canvas3d>
	);
}
function Rig() {
	useFrame((state, delta) => {
		// Animate the environment as well as the camera

		easing.damp3(
			state.camera.position,
			[
				Math.sin(state.pointer.x / 4) * 9,
				1 + state.pointer.y,
				Math.cos(state.pointer.x / 4) * 9,
			],
			0.5,
			delta
		);
		state.camera.lookAt(0, 0, 0);
	});
	return;
}

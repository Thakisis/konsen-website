"use client";
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("./canvas"), { ssr: false });
function CanvasLoader() {
	return (
		<div className="fixed flex top-0 left-0 inset-0 w-full h-screen  ">
			<Canvas />
		</div>
	);
}

export default CanvasLoader;

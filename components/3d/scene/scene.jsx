import { Suspense } from "react";
import { Grid } from "./grid";
import Kosen from "./kosen";
export default function Scene(props) {
	return (
		<>
			<Suspense fallback={null}>
				<Kosen>KoSEN</Kosen>
			</Suspense>
		</>
	);
}

import LogoKosen from "@/components/logo-kosen";

function Hero(props) {
	return (
		<div className="h-screen grid place-items-center grad-hero">
			<div className="absolute bottom-25  z-10">
				<button type="button" className=" herobutton">
					Consultenos sus proyectos
				</button>
			</div>
		</div>
	);
}

export default Hero;

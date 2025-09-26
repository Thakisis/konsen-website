import LogoKosen from "../logo-kosen";
export default function NavBar() {
	return (
		<nav className="absolute  inset-x-0 z-10 flex justify-between items-center px-4 py-4 afacad-flux text-white">
			<LogoKosen className="w-8 h-8" />
			<div className="flex gap-4 mr-5">
				<div className="text-xl font-thin cursor-pointer">PROYECTOS</div>
				<div className="text-xl font-thin cursor-pointer">SERVICIOS</div>
				<div className="text-xl font-thin cursor-pointer">EL EQUIPO</div>
				<div className="text-xl font-thin cursor-pointer">CONTACTO</div>
			</div>
		</nav>
	);
}

import Logo from "./logo";
import { useRouter } from "next/navigation";
const Cookies = require("js-cookie");

function Menu() {
	const router = useRouter();
	const onLogout = () => {
		Cookies.remove("token");
		router.push("/login");
	};
	return (
		<>
			<div className="flex justify-between items-center flex-1 pl-2 py-4 w-[351px] h-[39px] m-auto">
				<Logo />
				<button className="bg-red-400 flex px-[18px] h-[39px] py-[10px] items-center justify-center gap-2 border rounded-lg text-white font-semibold shadow-[0_1px_2px_0px_rgba(16, 24, 40, 0.05]" onClick={onLogout}>
					Logout
				</button>
			</div>
			;
		</>
	);
}

export default Menu;

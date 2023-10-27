"use client";

import { useRouter } from "next/navigation";

const Cookies = require("js-cookie");

export default function Home({ firstName }) {
	const router = useRouter();

	const cookie = Cookies.get("token");
	if (!cookie) {
		router.push("/login");
	}

	const onLogout = () => {
		Cookies.remove("token");
		router.push("/login");
	};

	const goDashboard = () => {
		router.push("/");
	};

	const goAbout = () => {
		router.push("/about");
	};

	return (
		<div className="space-y-4 h-screen w-screen">
			<div className="flex flex-col items-start self-stretch px-4 gap-6 md:flex-row md:justify-between max-w-[1280px] m-auto">
				<div>
					<h1 className="text-3xl font-semibold leading-8 font-inter">Welcome back!</h1>
				</div>
				<div className="flex items-center justify-center gap-2">
					<button className="flex px-[18px] py-[10px] items-center justify-center gap-2 border rounded-lg bg-[#7F56D9] text-white font-semibold shadow-[0_1px_2px_0px_rgba(16, 24, 40, 0.05]" onClick={goDashboard}>
						Dashboard
					</button>
					<button className="flex px-[18px] py-[10px] items-center justify-center gap-2 border rounded-lg bg-[#7F56D9] text-white font-semibold shadow-[0_1px_2px_0px_rgba(16, 24, 40, 0.05]" onClick={goAbout}>
						About
					</button>
					<button className="bg-red-400 flex px-[18px] py-[10px] items-center justify-center gap-2 border rounded-lg text-white font-semibold shadow-[0_1px_2px_0px_rgba(16, 24, 40, 0.05]" onClick={onLogout}>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}

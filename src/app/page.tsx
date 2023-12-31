"use client";

import { useRouter } from "next/navigation";
import Logo from "@/components/logo";
import Image from "next/image";
import { useEffect } from "react";

const Cookies = require("js-cookie");

export default function Home() {
	const router = useRouter();

	const cookie = Cookies.get("token");
	if (!cookie) {
		useEffect(() => {
			router.push("/login");
		});
	}

	const onLogout = () => {
		Cookies.remove("token");
		useEffect(() => {
			router.push("/login");
		});
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center h-[72px] m-auto md:w-[1216px]">
				<div className="flex pr-4 pl-3 justify-between items-center self-stretch">
					<div className="flex items-center gap-10">
						<Logo />
					</div>
					<div>
						<Image className="hidden" src="menu.svg" width={24} height={24} alt="mobile menu" />
						<ul className="flex items-center md:gap-8 gap-2">
							<li className="font-inter text-base font-semibold leading-6 text-[#667085]">Home</li>
							<button className="flex px-[18px] h-[39px] py-[10px] items-center justify-center gap-2 text-red-400 font-semibold shadow-[0_1px_2px_0px_rgba(16, 24, 40, 0.05]" onClick={onLogout}>
								Logout
							</button>
						</ul>
					</div>
				</div>
			</div>

			<div className="justify-center flex">
				<h1 className="font-inter text-2xl font-semibold leading-[72px] tracking-[-1.2px text-[#101828]">Welcome to your Dashboard</h1>
			</div>
		</>
	);
}

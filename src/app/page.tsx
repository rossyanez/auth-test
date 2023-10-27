"use client";

import { useRouter } from "next/navigation";

const Cookies = require("js-cookie");

export default function Home() {
	const router = useRouter();

	const onLogout = () => {
		Cookies.remove("token");
		router.push("/login");
	};

	return (
		<div className="m-4 space-y-4">
			<h1>Welcome frail gwapo!</h1>
			<button className="h-10 bg-red-400 px-6 text-white h-10 flex items-center justify-center rounded" onClick={onLogout}>
				Logout
			</button>
		</div>
	);
}

"use client";

import { useState } from "react";
import { post } from "@/utils/post";
import { useRouter } from "next/navigation";

const Cookies = require("js-cookie");

export default function Home() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const [loading, setLoading] = useState(false);

	const onLogin = async (event: any) => {
		setLoading(true);
		event.preventDefault();
		const response = await post("http://localhost:3000/api/users", {
			firstname: firstName,
			lastname: lastName,
			email,
			password,
		});

		if (response) {
			setLoading(false);
			router.push("/login");
		}
	};

	return (
		<>
			<form className="space-y-4 m-4" onSubmit={(event) => onLogin(event)}>
				<input required type="text" placeholder="First Name" className="h-10 border border-black rounded block px-4" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
				<input required type="text" placeholder="Last Name" className="h-10 border border-black rounded block px-4" value={lastName} onChange={(event) => setLastName(event.target.value)} />
				<input required type="email" className="h-10 border border-black rounded block px-4" placeholder="Email address" value={email} onChange={(event) => setEmail(event.target.value)} />
				<input required type="password" className="h-10 border border-black rounded block px-4" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
				<button className="h-10 bg-blue-400 px-6 text-white h-10 flex items-center justify-center rounded" type="submit">
					{loading ? "Loading..." : "Sign up"}
				</button>
			</form>
		</>
	);
}

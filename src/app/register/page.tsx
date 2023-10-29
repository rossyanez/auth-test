"use client";

import { useState } from "react";
import { post } from "@/utils/post";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Cookies = require("js-cookie");

export default function Register() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const [loading, setLoading] = useState(false);

	const onRegister = async (event: any) => {
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
			<div className="h-screen w-screen flex items-center justify-center">
				<div className="flex flex-col gap-12 self-stretch max-w-[360px] m-auto">
					<div className="flex flex-col items-center justify-center gap-6">
						<Image src="./logo-untitled.svg" alt="untitled logo" width={48} height={48} />
						<div className="flex flex-col items-center justify-center gap-y-3">
							<h1 className="text-3xl font-semibold leading-8 font-inter">Create an account</h1>
							<p className="text-base leading-6 font-inter text-[#667085]">Start your 30-day free trial.</p>
						</div>
					</div>
					<form className="flex flex-col items-center gap-6 self-stretch" onSubmit={(event) => onRegister(event)}>
						<div className="flex flex-col items-start gap-[6px] self-stretch">
							<label htmlFor="firstName">First Name</label>
							<input required id="firstName" type="text" className="h-10 border border-[#D0D5DD] rounded block px-4 w-[100%]" placeholder="Enter your first name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
						</div>
						<div className="flex flex-col items-start gap-[6px] self-stretch">
							<label htmlFor="lastName">Last Name</label>
							<input required id="lastName" type="text" className="h-10 border border-[#D0D5DD] rounded block px-4 w-[100%]" placeholder="Enter your last name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
						</div>
						<div className="flex flex-col items-start gap-[6px] self-stretch">
							<label htmlFor="email">Email</label>
							<input required id="email" type="email" className="h-10 border border-[#D0D5DD] rounded block px-4 w-[100%]" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
						</div>
						<div className="flex flex-col items-start gap-[6px] self-stretch">
							<label htmlFor="password">Password</label>
							<input required id="password" type="password" className="h-10 border border-[#D0D5DD] rounded block px-4 w-[100%]" placeholder="••••••••" value={password} onChange={(event) => setPassword(event.target.value)} />
						</div>
						<button className="flex px-[18px] py-[10px] items-center justify-center gap-2 border rounded-lg bg-[#7F56D9] w-[100%] text-white font-semibold shadow-[0_1px_2px_0px_rgba(16, 24, 40, 0.05" type="submit">
							{loading ? "Please wait..." : "Sign up"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

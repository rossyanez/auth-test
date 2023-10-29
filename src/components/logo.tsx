import Image from "next/image";

function Logo() {
	return (
		<div className="flex w-[142px] h-[32px] justify-center items-start gap-2.5">
			<Image src="/logo-untitled.svg" width={32} height={32} alt="untitled logo" />
			<Image src="/untitled-logotype.svg" width={100} height={32} alt="logotype" />
		</div>
	);
}

export default Logo;

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head></head>
			<body>
				{/* <nav>
					<a href="/">Home</a>
					<a href="/login">Login</a>
				</nav> */}
				{children}
			</body>
		</html>
	);
}

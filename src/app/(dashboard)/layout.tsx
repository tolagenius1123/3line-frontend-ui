import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="w-full h-screen flex">
			<Sidebar />
			<div className="flex flex-1 flex-col bg-3line-gray">
				<Header />
				<div className="p-5">{children}</div>
			</div>
		</main>
	);
}

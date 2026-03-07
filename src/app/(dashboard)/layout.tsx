import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="w-full h-screen flex overflow-hidden">
			<Sidebar />
			<div className="flex flex-1 flex-col bg-3line-gray">
				<Header />
				<div className="flex-1 p-5 overflow-y-auto dashboard-scrollbar">
					{children}
				</div>
			</div>
		</main>
	);
}

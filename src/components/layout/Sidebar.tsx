"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AdImage, Avatar, BrandLogo } from "@/assets";
import { SearchInput } from "./SearchInput";
import SidebarLink from "./SidebarLink";
import { routes } from "@/lib/sidebar-routes";
import { LogOut } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className="bg-white hidden md:block w-70 border-r border-r-3line-dark-gray overflow-y-auto custom-scrollbar h-screen">
			<div className="flex flex-col h-full py-5 px-5">
				<div className="flex-1">
					<div className="w-full flex items-center gap-2">
						<Image src={BrandLogo} alt="3line_icon" />
						<p className="font-semibold text-[#5F3DB3] text-lg md:text-2xl">
							3line
						</p>
					</div>

					<div className="mt-5">
						<SearchInput placeholder="Search..." />
					</div>

					<div className="mt-4 flex flex-col gap-1">
						{routes.map((route) => (
							<SidebarLink
								key={route.href}
								{...route}
								isActive={pathname === route.href}
							/>
						))}
					</div>

					<div className="mt-5">
						<div className="bg-3line-gray rounded-lg px-4 py-6">
							<div className="text-sm space-y-1">
								<p>New features available!</p>
								<p className="text-[#667085]">
									Check out the new dashboard view. Pages now
									load faster.
								</p>
							</div>

							<Image
								src={AdImage}
								alt="ad-image"
								height={300}
								width={300}
								className="w-full mt-3 rounded-lg"
							/>

							<div className="flex items-center gap-2 text-sm mt-2">
								<p>Dismiss</p>
								<Link
									href="/"
									className="text-blue-500 hover:underline"
								>
									What&apos;s new?
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-4">
					<Separator className="my-3" />
					<div className="py-2 cursor-pointer pb-4">
						<div className="flex items-center justify-between gap-3">
							<div className="flex items-center gap-3">
								<div className="relative h-10 w-10 shrink-0">
									<Image
										src={Avatar}
										alt="Olivia Rhye"
										fill
										className="rounded-full object-cover"
									/>
								</div>
								<div className="flex flex-col overflow-hidden">
									<p className="text-sm font-semibold text-gray-900 truncate">
										Olivia Rhye
									</p>
									<p className="text-sm text-gray-500 truncate">
										olivia@untitledui.com
									</p>
								</div>
							</div>
							<button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
								<LogOut size={20} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

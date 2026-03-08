import { BrandLogo } from "@/assets";
import Image from "next/image";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
	return (
		<div className="w-full fixed z-50 bg-white flex md:hidden justify-between items-center px-6 py-3 border-b border-b-3line-dark-gray">
			<div className="w-full flex items-center gap-2">
				<Image src={BrandLogo} alt="3line_icon" />
				<p className="font-semibold text-[#5F3DB3] text-lg md:text-2xl">
					3line
				</p>
			</div>

			<MobileSidebar />
		</div>
	);
};

export default Header;

import { Users } from "lucide-react";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Check } from "@/assets";

interface RoleCardProps {
	value: string;
	title: string;
	lastActive: string;
	isActive?: boolean;
}

const RoleCard = ({ value, title, lastActive, isActive }: RoleCardProps) => {
	return (
		<div className="relative">
			<RadioGroupItem value={value} id={value} className="peer sr-only" />
			<Label
				htmlFor={value}
				className={cn(
					"flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all",
					isActive
						? "border-[#D6BBFB] bg-[#F9F5FF]"
						: "border-slate-200 bg-white hover:bg-slate-50",
				)}
			>
				<div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm">
					<Users className="h-5 w-5 text-slate-600" />
				</div>

				<div className="flex-1">
					<div className="flex items-center justify-between">
						<span
							className={cn(
								"font-semibold",
								isActive ? "text-[#53389E]" : "text-slate-900",
							)}
						>
							{title}
						</span>

						<div
							className={cn(
								"h-5 w-5 rounded-full flex items-center justify-center shrink-0",
								isActive
									? "bg-[#6938EF]"
									: "border-2 border-slate-300 bg-white",
							)}
						>
							{isActive && (
								<Image
									src={Check}
									alt="check-icon"
									height={50}
									width={50}
								/>
							)}
						</div>
					</div>

					<p
						className={cn(
							"text-sm mt-0.5",
							isActive
								? "text-[#7F56D9]"
								: "text-muted-foreground",
						)}
					>
						Last active {lastActive}
					</p>

					<div className="flex gap-4 mt-3">
						<button
							type="button"
							className={cn(
								"text-sm font-medium hover:text-slate-900",
								isActive ? "text-[#9E77ED]" : "text-slate-500",
							)}
						>
							Set as default
						</button>
						<button
							type="button"
							className="text-sm font-medium text-[#6938EF] hover:underline"
						>
							Edit
						</button>
					</div>
				</div>
			</Label>
		</div>
	);
};

export default RoleCard;

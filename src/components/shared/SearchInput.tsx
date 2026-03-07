import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({ className, ...props }: SearchInputProps) {
	return (
		<div className="relative w-full">
			<Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

			<Input
				{...props}
				className={cn(
					"pl-12 h-11 rounded-lg text-lg",
					"focus-visible:ring-4 focus-visible:ring-purple-100",
					"focus-visible:border-purple-300",
					className,
				)}
			/>
		</div>
	);
}

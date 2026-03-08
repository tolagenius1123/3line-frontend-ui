import { Skeleton } from "@/components/ui/skeleton";

export function UserRolesTableSkeleton() {
	return (
		<div className="space-y-3">
			<div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-center justify-between">
				<Skeleton className="h-5 w-24" />
				<Skeleton className="h-9 w-36" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-10 w-full" />
				{Array.from({ length: 5 }).map((_, i) => (
					<Skeleton key={i} className="h-12 w-full" />
				))}
			</div>
		</div>
	);
}

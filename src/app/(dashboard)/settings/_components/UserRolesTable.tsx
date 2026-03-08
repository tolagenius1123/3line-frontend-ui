"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Check, CloudDownload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Role, RoleUser } from "@/lib/types";
import { DataTable } from "@/components/table/data-table";
import { rolesData } from "@/lib/data";

const MAX_VISIBLE = 4;

function AvatarStack({ users }: { users: RoleUser[] }) {
	const visible = users.slice(0, MAX_VISIBLE);
	const overflow = users.length - MAX_VISIBLE;

	return (
		<div className="flex items-center">
			<div className="flex -space-x-2">
				{visible.map((user) => (
					<Image
						width={50}
						height={50}
						key={user.id}
						src={user.avatar}
						alt={user.name}
						title={user.name}
						className="h-7 w-7 rounded-full border-2 border-white object-cover bg-slate-100"
						unoptimized
					/>
				))}
			</div>
			{overflow > 0 && (
				<span className="ml-1.5 text-xs font-medium text-slate-500">
					+{overflow}
				</span>
			)}
		</div>
	);
}

function StatusBadge({ status }: { status: Role["status"] }) {
	const isActive = status === "Active";
	return (
		<Badge
			// variant="outline"
			className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
				isActive
					? " bg-emerald-50 text-emerald-700"
					: " text-white bg-[#F2994A]"
			}`}
		>
			{isActive && (
				<Check
					className={`h-1.5 w-1.5 rounded-full ${
						isActive ? "text-emerald-500" : "text-orange-400"
					}`}
				/>
			)}
			{status}
		</Badge>
	);
}

const columns: ColumnDef<Role>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) =>
					table.toggleAllPageRowsSelected(!!value)
				}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="px-0 font-medium text-slate-500 hover:text-slate-900 hover:bg-transparent -ml-1"
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === "asc")
				}
			>
				Name
				<ArrowUpDown className="ml-1.5 h-3.5 w-3.5" />
			</Button>
		),
		cell: ({ row }) => (
			<span className="font-medium text-slate-800">
				{row.getValue("name")}
			</span>
		),
	},
	{
		accessorKey: "type",
		header: () => <span className="font-medium text-slate-500">Type</span>,
		cell: ({ row }) => (
			<span className="text-sm text-slate-500">
				{row.getValue("type")}
			</span>
		),
	},
	{
		accessorKey: "dateCreated",
		header: () => (
			<span className="font-medium text-slate-500">Date created</span>
		),
		cell: ({ row }) => (
			<span className="text-sm text-slate-600">
				{row.getValue("dateCreated")}
			</span>
		),
	},
	{
		accessorKey: "status",
		header: () => (
			<span className="font-medium text-slate-500">Status</span>
		),
		cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
	},
	{
		accessorKey: "roleUsers",
		header: () => (
			<span className="font-medium text-slate-500">Role users</span>
		),
		cell: ({ row }) => <AvatarStack users={row.getValue("roleUsers")} />,
		enableSorting: false,
	},
	{
		id: "actions",
		cell: () => (
			<Button
				variant="ghost"
				size="icon"
				className="h-8 w-8 text-slate-400 hover:text-slate-700 hover:bg-slate-100"
			>
				<CloudDownload className="h-4 w-4" />
			</Button>
		),
		enableSorting: false,
		enableHiding: false,
	},
];

export function UserRolesTable() {
	return (
		<div className="space-y-3">
			<div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-center justify-between">
				<h2 className="text-base font-semibold text-slate-800">
					User Roles
				</h2>
				<Button
					variant="outline"
					size="sm"
					className="w-36.5 gap-2 text-sm text-slate-600 py-5 px-5 cursor-pointer"
				>
					<CloudDownload className="h-4 w-4" />
					Download all
				</Button>
			</div>

			<DataTable columns={columns} data={rolesData} />
		</div>
	);
}

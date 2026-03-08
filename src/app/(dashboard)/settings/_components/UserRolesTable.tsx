import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/table/data-table";
import { getRoles } from "@/lib/data";
import { CloudDownload } from "lucide-react";
import { columns } from "./columns";

export async function UserRolesTable() {
	const roles = await getRoles();

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

			<DataTable columns={columns} data={roles} />
		</div>
	);
}

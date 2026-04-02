"use client";

import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Role } from "@/lib/types";
import { CloudDownload, X } from "lucide-react";
import { columns } from "./columns";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

type UserRoleClientProps = {
	roles: Role[];
};

const UserRolesClient = ({ roles }: UserRoleClientProps) => {
	const [inputValue, setInputValue] = useState("");

	const filteredRoles = useMemo(
		() =>
			roles.filter((role) =>
				role?.name.toLowerCase().includes(inputValue.toLowerCase()),
			),
		[inputValue, roles],
	);

	return (
		<div className="space-y-3">
			<div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-center justify-between">
				<h2 className="text-base font-semibold text-slate-800">
					User Roles
				</h2>

				<div className="flex flex-col md:flex-row items-center gap-3">
					<div className="w-58 relative">
						<Input
							type="text"
							placeholder="Search by name..."
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						{inputValue && (
							<button onClick={() => setInputValue("")}>
								<X className="h-4 w-5 absolute top-2.5 right-2 text-gray-400" />
							</button>
						)}
					</div>
					<Button
						variant="outline"
						size="sm"
						className="w-36.5 gap-2 text-sm text-slate-600 py-5 px-5 cursor-pointer"
					>
						<CloudDownload className="h-4 w-4" />
						Download all
					</Button>
				</div>
			</div>

			<DataTable columns={columns} data={filteredRoles} />
		</div>
	);
};

export default UserRolesClient;

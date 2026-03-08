import { Suspense } from "react";
import SettingsClient from "./_components/SettingsClient";
import { UserRolesTable } from "./_components/UserRolesTable";
import { UserRolesTableSkeleton } from "./_components/UserRolesTableSkeleton";

const Settings = () => {
	return (
		<div className="w-full mx-auto px-2 md:px-8 pt-20 md:pt-5 space-y-8">
			<div>
				<h1 className="text-2xl md:text-3xl font-semibold">Settings</h1>
				<p className="text-muted-foreground mt-1">
					Manage your team and preferences here.
				</p>
			</div>
			<SettingsClient />
			<Suspense fallback={<UserRolesTableSkeleton />}>
				<UserRolesTable />
			</Suspense>
		</div>
	);
};

export default Settings;

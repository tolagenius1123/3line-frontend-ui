import { getRoles } from "@/lib/data";
import UserRolesClient from "./UserRolesClient";

export async function UserRolesTable() {
	const roles = await getRoles();

	return <UserRolesClient roles={roles} />;
}

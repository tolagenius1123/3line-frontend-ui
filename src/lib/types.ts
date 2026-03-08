export type RoleStatus = "Active" | "In Active";
export type RoleType = "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";

export type RoleUser = {
	id: string;
	avatar: string;
	name: string;
};

export type Role = {
	id: string;
	name: string;
	type: RoleType;
	dateCreated: string;
	status: RoleStatus;
	roleUsers: RoleUser[];
};

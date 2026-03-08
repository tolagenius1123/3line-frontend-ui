import { Role } from "@/lib/types";

export async function getRoles(): Promise<Role[]> {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/roles`,
		{
			next: { revalidate: 60 },
		},
	);

	if (!res.ok) throw new Error("Failed to fetch roles");
	return res.json();
}

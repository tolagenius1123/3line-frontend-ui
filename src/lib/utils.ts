import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { RoleUser } from "./types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const avatarSeeds = [
	"Aiden",
	"Bella",
	"Cara",
	"Dana",
	"Evan",
	"Faye",
	"Gina",
	"Hana",
	"Ivan",
	"Jess",
	"Kai",
	"Luna",
	"Mia",
	"Nora",
	"Owen",
];

export const makeUsers = (count: number, offset = 0): RoleUser[] =>
	Array.from({ length: count }, (_, i) => {
		const seed = avatarSeeds[(offset + i) % avatarSeeds.length];
		return {
			id: `user-${offset + i}`,
			name: seed,
			avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`,
		};
	});

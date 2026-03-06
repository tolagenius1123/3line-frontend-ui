import {
	ChartNoAxesColumn,
	Flag,
	House,
	Layers,
	LifeBuoy,
	Settings,
	SquareCheckBig,
	Users,
} from "lucide-react";

export const routes = [
	{
		href: "/",
		label: "Home",
		icon: <House size={20} />,
	},
	{
		href: "/dashboard",
		label: "Dashboard",
		icon: <ChartNoAxesColumn size={20} />,
		badge: 10,
	},
	{
		href: "/projects",
		label: "Projects",
		icon: <Layers size={20} />,
	},
	{
		href: "/tasks",
		label: "Tasks",
		icon: <SquareCheckBig size={20} />,
	},
	{
		href: "/reporting",
		label: "Reporting",
		icon: <Flag size={20} />,
	},
	{
		href: "/users",
		label: "Users",
		icon: <Users size={20} />,
	},
	{
		href: "/support",
		label: "Support",
		icon: <LifeBuoy size={20} />,
	},
	{
		href: "/settings",
		label: "Settings",
		icon: <Settings size={20} />,
	},
];

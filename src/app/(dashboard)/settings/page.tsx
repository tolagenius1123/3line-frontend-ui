"use client";
import { Mail, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { tabList } from "@/lib/data";
import RoleCard from "@/components/shared/RoleCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Settings = () => {
	const [activeRole, setActiveRole] = useState("superadmin");

	return (
		<div className="max-w-5xl mx-auto p-8 space-y-8">
			<div>
				<h1 className="text-3xl font-semibold">Settings</h1>
				<p className="text-muted-foreground mt-1">
					Manage your team and preferences here.
				</p>
			</div>

			<Tabs defaultValue="roles" className="w-full">
				<TabsList className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-white p-0 overflow-hidden">
					{tabList.map((tab) => (
						<TabsTrigger
							key={tab}
							value={tab.toLowerCase()}
							className="h-full px-4 rounded-none border-r border-slate-200 last:border-r-0 data-[state=active]:bg-muted data-[state=active]:shadow-none cursor-pointer"
						>
							{tab}
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>

			<section className="space-y-6 mt-5">
				<div>
					<h2 className="text-lg font-semibold">User Roles</h2>
					<p className="text-sm text-muted-foreground">
						Update your roles details and information.
					</p>
				</div>

				<Separator />

				<div className="flex flex-col md:flex-row gap-10">
					<div className="">
						<Label className="text-sm font-semibold">
							Connected email
						</Label>
						<p className="text-sm text-muted-foreground">
							Select role account
						</p>
					</div>

					<div className="max-w-md">
						<RadioGroup
							defaultValue="alternative"
							className="space-y-6"
						>
							<div className="flex items-start space-x-3">
								<RadioGroupItem
									value="my-account"
									id="my-account"
									className="mt-1 bg-white"
								/>
								<div className="grid gap-1.5 leading-none">
									<Label
										htmlFor="my-account"
										className="text-sm font-medium"
									>
										My account email
									</Label>
									<p className="text-sm text-muted-foreground font-normal">
										olivia@untitledui.com
									</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<RadioGroupItem
										value="alternative"
										id="alternative"
										className="bg-white"
									/>
									<Label
										htmlFor="alternative"
										className="text-sm font-medium"
									>
										An alternative email
									</Label>
								</div>

								<div className="relative ml-7">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<Mail className="h-4 w-4 text-muted-foreground" />
									</div>
									<Input
										type="email"
										defaultValue="billing@untitledui.com"
										className="pl-10 bg-white w-full md:w-122"
									/>
								</div>
							</div>
						</RadioGroup>
					</div>
				</div>
			</section>

			<Separator />

			<section className="flex flex-col md:flex-row gap-10">
				<div className="w-full md:w-1/4">
					<Label className="text-sm font-semibold text-slate-900">
						Active Role
					</Label>
					<p className="text-sm text-muted-foreground">
						Select active role available to the user.
					</p>
				</div>

				<div className="flex-1 space-y-4">
					<RadioGroup
						value={activeRole}
						onValueChange={setActiveRole}
						className="space-y-3"
					>
						<RoleCard
							value="superadmin"
							title="Superadmin"
							lastActive="06/2023"
							isActive={activeRole === "superadmin"}
						/>
						<RoleCard
							value="developeradmin"
							title="Developeradmin"
							lastActive="01/2023"
							isActive={activeRole === "developeradmin"}
						/>
						<RoleCard
							value="supportadmin"
							title="Supportadmin"
							lastActive="10/2022"
							isActive={activeRole === "supportadmin"}
						/>
					</RadioGroup>

					<Button
						variant="ghost"
						className="flex items-center gap-2 px-0 text-slate-500 hover:bg-transparent hover:text-slate-900"
					>
						<Plus className="h-4 w-4" />
						Add role to user
					</Button>
				</div>
			</section>
		</div>
	);
};

export default Settings;

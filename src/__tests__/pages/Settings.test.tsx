import Settings from "@/app/(dashboard)/settings/page";
import { render, screen } from "@testing-library/react";

jest.mock("@/app/(dashboard)/settings/_components/SettingsClient", () => {
	const MockSettingsClient = () => <div>SettingsClient</div>;
	MockSettingsClient.displayName = "MockSettingsClient";
	return MockSettingsClient;
});

jest.mock("@/app/(dashboard)/settings/_components/UserRolesTable", () => ({
	UserRolesTable: () => <div>UserRolesTable</div>,
}));

describe("Settings Page", () => {
	it("renders page heading", () => {
		render(<Settings />);

		expect(screen.getByText("Settings")).toBeInTheDocument();
	});

	it("renders description text", () => {
		render(<Settings />);

		expect(
			screen.getByText("Manage your team and preferences here."),
		).toBeInTheDocument();
	});

	it("renders settings client and table", () => {
		render(<Settings />);

		expect(screen.getByText("SettingsClient")).toBeInTheDocument();
		expect(screen.getByText("UserRolesTable")).toBeInTheDocument();
	});
});

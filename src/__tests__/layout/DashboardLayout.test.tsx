import DashboardLayout from "@/app/(dashboard)/layout";
import { render, screen } from "@testing-library/react";

jest.mock("@/components/layout/Header", () => {
	const MockHeader = () => <div>Header</div>;
	MockHeader.displayName = "MockHeader";
	return MockHeader;
});

jest.mock("@/components/layout/Sidebar", () => {
	const MockSidebar = () => <div>Sidebar</div>;
	MockSidebar.displayName = "MockSidebar";
	return MockSidebar;
});

describe("DashboardLayout", () => {
	it("renders Header and Sidebar", () => {
		render(
			<DashboardLayout>
				<div>Test Child</div>
			</DashboardLayout>,
		);

		expect(screen.getByText("Header")).toBeInTheDocument();
		expect(screen.getByText("Sidebar")).toBeInTheDocument();
	});

	it("renders children content", () => {
		render(
			<DashboardLayout>
				<div>Test Child</div>
			</DashboardLayout>,
		);

		expect(screen.getByText("Test Child")).toBeInTheDocument();
	});
});

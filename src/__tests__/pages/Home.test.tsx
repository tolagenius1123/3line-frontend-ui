import Home from "@/app/(dashboard)/page";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
	it("renders Home text", () => {
		render(<Home />);

		expect(screen.getByText("Home")).toBeInTheDocument();
	});
});

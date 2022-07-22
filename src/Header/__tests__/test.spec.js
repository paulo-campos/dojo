import { render, screen } from "@testing-library/react";

import Header from "../";

describe("Header", () => {
  it("should render correctly", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });

  it("Should receive and render a dynamic title", () => {
    const title = "TITULO DO HEADER";

    render(<Header title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
  it("Should receive and render a dynamic color", () => {
    const color = ".background--primary";

    const { container } = render(<Header className={color} />);

    expect(container.firstChild).toHaveClass(color);
  });
});

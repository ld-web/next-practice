import { render, screen } from "@testing-library/react";
import Output from "./Output";

describe("Practice output", () => {
  test("no error", () => {
    render(<Output lines={[]} error={false} />);

    const output = screen.getByRole("alert");
    expect(output).not.toHaveClass(/red/, /bold/);
  });

  test("with error", () => {
    render(<Output lines={[]} error={true} />);

    const output = screen.getByRole("alert");
    expect(output).toHaveClass(/red/, /bold/);
  });
});

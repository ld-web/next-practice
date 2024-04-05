import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import SubmitButton from "./SubmitButton";

describe("Practice Button", () => {
  describe("Base", () => {
    test("disabled class", () => {
      render(<SubmitButton status="init" />);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("disabled:bg-gray-400");
    });
  });

  describe("Status", () => {
    test("init", () => {
      render(<SubmitButton status="init" />);
      const button = screen.getByText(/tester/i);
      expect(button).toHaveClass("bg-orange-500");
    });

    test("running", () => {
      render(<SubmitButton status="running" />);
      const button = screen.getByRole("button");
      const loading = screen.getByTestId("loading");
      expect(button).toBeDisabled();
      expect(button).toContainElement(loading);
    });

    test("success", () => {
      render(<SubmitButton status="success" />);
      const button = screen.getByText(/ok/i);
      const checkBadge = screen.getByTestId("check-badge");
      expect(button).toHaveClass("bg-green-500");
      expect(button).toContainElement(checkBadge);
    });

    test("failed", () => {
      render(<SubmitButton status="failed" />);
      const button = screen.getByText(/réessayer/i);
      const exclamationCircle = screen.getByTestId("exclamation-circle");
      expect(button).toHaveClass("bg-red-500");
      expect(button).toContainElement(exclamationCircle);
    });
  });
});

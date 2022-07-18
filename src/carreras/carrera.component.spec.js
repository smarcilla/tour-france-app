import React from "react";
import { render, screen } from "@testing-library/react";
import { Carrera } from "./carrera.component";
describe("Carrera", () => {
  test("should render a button avanzar", () => {
    render(<Carrera />);
    const avanzarButton = screen.getByRole("button", { name: "avanzar" });
    expect(avanzarButton).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavbarFormulario from "@/app/Components/NavbarFormulario.";

test("renders the Navbar component", () => {
  render(<NavbarFormulario />);
  expect(screen.getByText("INICIO")).toBeInTheDocument();
  expect(screen.getByText("ACERCA DE MI")).toBeInTheDocument();
  expect(screen.getByText("FORMULARIO DE CONTACTO")).toBeInTheDocument();
});

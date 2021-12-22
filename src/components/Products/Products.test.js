import React from "react";
import { render, screen } from '@testing-library/react';
import Products from "./Products";

describe("Products", () => {
  test("matches snapshot", () => {
    render(<Products />);
    expect(screen).toMatchSnapshot();
  });
});

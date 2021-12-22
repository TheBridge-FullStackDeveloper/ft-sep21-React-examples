import React from "react";
import { render, screen } from '@testing-library/react';
import Reviews from "./Reviews";

describe("Reviews", () => {
  test("matches snapshot", () => {
    render(<Reviews />);
    expect(screen).toMatchSnapshot();
  });
});

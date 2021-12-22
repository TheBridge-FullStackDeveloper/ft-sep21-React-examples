import React from "react";
import { render, screen } from '@testing-library/react';
import Rating from "./Rating";

describe("Rating", () => {
  test("matches snapshot", () => {
    render(<Rating />);
    expect(screen).toMatchSnapshot();
  });
});

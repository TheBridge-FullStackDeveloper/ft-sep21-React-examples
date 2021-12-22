import React from "react";
import { render, screen } from '@testing-library/react';
import Donate from "./Donate";

describe("Donate", () => {
  test("matches snapshot", () => {
    render(<Donate />);
    expect(screen).toMatchSnapshot();
  });
});

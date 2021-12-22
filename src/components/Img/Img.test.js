import React from "react";
import { render, screen } from '@testing-library/react';
import Img from "./Img";

describe("Img", () => {
  test("matches snapshot", () => {
    render(<Img />);
    expect(screen).toMatchSnapshot();
  });
});

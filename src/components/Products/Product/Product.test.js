import React from "react";
import { render, screen } from '@testing-library/react';
import Product from "./Product";
import data from '../../../data'


describe("Product", () => {
  test("matches snapshot", () => {
    render(<Product info={data[0]}/>);
    expect(screen).toMatchSnapshot();
  });
});

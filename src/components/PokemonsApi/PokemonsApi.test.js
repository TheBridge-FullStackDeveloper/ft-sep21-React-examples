import React from "react";
import { render, screen } from '@testing-library/react';
import PokemonsApi from "./PokemonsApi";

describe("PokemonsApi", () => {
  test("matches snapshot", () => {
    render(<PokemonsApi />);
    expect(screen).toMatchSnapshot();
  });
});

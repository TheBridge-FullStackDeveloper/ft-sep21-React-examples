import React from "react";
//import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react';
import Pokeuser from "./Pokeuser";

describe("Pokeuser", () => {
  test("matches snapshot", () => {
    //const wrapper = shallow(<Pokeuser />);
    render(<Pokeuser />);
    //expect(wrapper).toMatchSnapshot();
    expect(screen).toMatchSnapshot();
  });
});

import React from "react";
import { render, screen } from '@testing-library/react';
import Nav from "./Nav";
import {themeContext} from '../../context/themeContext';
import {BrowserRouter} from 'react-router-dom';

describe("Nav", () => {

  
  test("matches snapshot", () => {

    const themeObj = {
      theme: "",
      toggleTheme: () => theme ? theme = "" : theme = "dark"
    }

    render(
      <BrowserRouter>
        <themeContext.Provider value={themeObj}>   
           <Nav />
        </themeContext.Provider> 
      </BrowserRouter>
    
    );
    expect(screen).toMatchSnapshot();
  });
});

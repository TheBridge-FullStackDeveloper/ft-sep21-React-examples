import React from "react";
import { render, screen } from '@testing-library/react';
import Header from "./Header";
import {userContext} from '../../context/userContext';
import {themeContext} from '../../context/themeContext';
import {BrowserRouter} from 'react-router-dom';

describe("Header", () => {

  const value = {
    user: '',
    login: (name) => this.user = name,
    logout: () => this.user =''
  }

  const themeObj = {
    theme: "",
    toggleTheme: () => theme ? theme = "" : theme = "dark"
  }

  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <userContext.Provider value={value}>
            <themeContext.Provider value={themeObj}> 
              <Header />
            </themeContext.Provider> 
        </userContext.Provider>
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});

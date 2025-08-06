import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; 
import App from "./App";
import user from "../data/user";
// Assuming user is an object with properties like name, city, color, bio, and links
test("renders user name in Home component", () => {
  render(<App />);
  expect(
    screen.getByText(`${user.name} is a Web Developer from ${user.city}`)
  ).toBeInTheDocument();
});
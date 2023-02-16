import { useState } from "react";
import "./App.css";
import "./bootstrap4.min.css";
import SearchBar from './SearchBar'
import Dropdown from "./SearchBar/Dropdown"

import { NavLink } from "react-router-dom";

export default function FileBar() {

  const [showBrowse, toggleBrowse] = useState(false);
  const openBrowse = () => toggleBrowse(!showBrowse)

  return (
    <nav className="bg-gray-200">

      {/* app wrapper width */}
      <div className="container mx-auto py-1">

        <div className="flex justify-between">
          {/* <NavLink to="/friends" className="mr-10">How to change an e90 headlight bulb</NavLink> */}
          <span className="mr-10">How to remove the glovebox in an e90</span>
          {/* <span></span> */}
          <div>
          <NavLink to="/friends" className="mr-10">tags</NavLink>
          <NavLink to="/friends" className="mr-10">programs</NavLink>
          <NavLink to="/friends" className="mr-10">share</NavLink>
          </div>



        </div>

      </div>

    </nav>
  );
}
import { useState } from "react";
import "./App.css";
import "./bootstrap4.min.css";
import SearchBar from './SearchBar'
import Dropdown from "./SearchBar/Dropdown"

import { NavLink } from "react-router-dom";

export default function FavBar() {

  const [showBrowse, toggleBrowse] = useState(false);
  const openBrowse = () => toggleBrowse(!showBrowse)

  return (
    <nav className="bg-blue-50">

      {/* app wrapper width */}
      <div className="container mx-auto py-1">

        <div className="flex justify-end">

          {/* <NavLink to="/friends">extensions</NavLink> */}
          {/* <span></span> */}
          <NavLink  to="/friends" className="mr-10">login or signup</NavLink>
          <NavLink to="/friends">create server</NavLink>


        </div>

      </div>

    </nav>
  );
}
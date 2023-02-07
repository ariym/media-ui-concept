import { useState } from "react";
import "./App.css";
import "./bootstrap4.min.css";
import SearchBar from './SearchBar'
import Dropdown from "./SearchBar/Dropdown"

import { NavLink } from "react-router-dom";

export default function AppNav() {

  const [showBrowse, toggleBrowse] = useState(false);
  const openBrowse = () => toggleBrowse(!showBrowse)

  return (
    <nav className="navbar-light bg-light">

      {/* app wrapper width */}
      <div className="container mx-auto flex py-3">

        {/* <NavLink to="/" className="flex-none navbar-brand">oClip</NavLink> */}
        <button className="flex-none btn btn-info" onClick={openBrowse}>oClip</button>

        <SearchBar />

        <button className="flex-none btn btn-primary" onClick={openBrowse}>Full Menu</button>

        {/* <button className="flex-none btn btn-info mx-1" onClick={openBrowse}>Social (5)</button> */}

        <Dropdown
          toggleBrowse={openBrowse}
          showBrowse={showBrowse}
        />
      </div>

    </nav>
  );
}
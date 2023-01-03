import "./App.css";
import "./bootstrap4.min.css";
import SearchBar from './SearchBar'
import Dropdown from "./SearchBar/Dropdown"

import { NavLink } from "react-router-dom";

export default function BetterNav() {

  // const toggleBrowse = () => 

  return (
    <nav className="navbar-light bg-light">

      {/* app wrapper width */}
      <div className="container mx-auto flex py-3">

      <NavLink to="/" className="flex-none navbar-brand">oClip</NavLink>

        <SearchBar />

        {/* <button className="flex-none btn btn-primary" onClick={toggleBrowse}>Browse</button> */}
        <Dropdown />
      </div>

    </nav>
  );
}
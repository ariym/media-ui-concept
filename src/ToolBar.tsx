import { useState } from "react";
import "./App.css";
import "./bootstrap4.min.css";
import SearchBar from './SearchBar'
import Dropdown from "./SearchBar/Dropdown"

export default function ToolBar() {

  const [showBrowse, toggleBrowse] = useState(false);
  const openBrowse = () => toggleBrowse(!showBrowse)

  const title="clip title"

  const buttonAction = () => console.log("button action");

  return (
    <nav className="bg-slate-200">

      {/* app wrapper width */}
      <div className="container mx-auto py-1">

        <div className="flex justify-left">

          <button className="btn btn-outline-primary mx-2" onClick={buttonAction}>{title} Details</button>
          <button className="btn mx-2" onClick={buttonAction}>history</button>
          <button className="btn mx-2" onClick={buttonAction}>settings</button>
          <button className="btn mx-2" onClick={buttonAction}>upload</button>

        </div>

      </div>

    </nav>
  );
}
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import Dropdown from "./Dropdown";

export type navBarPropsType = {};

export type navBarRefType = {
  enterSearch: () => void,
  enterCommand: () => void
}

const NavBar = forwardRef<navBarRefType, navBarPropsType>((props, ref) => {
  const [query, modifyQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  // refs for keyboard shortcuts
  useImperativeHandle(ref, () => ({
    enterSearch: () => inputRef.current?.focus(),
    enterCommand: () => {
      // if (document.activeElement !== inputRef.current) modifyQuery("");
      modifyQuery("");
      inputRef.current?.focus();
    }
  }));

  const openBrowse = () => console.log("trigger a dropdown, see docs");

  return (
    <nav className="flex w-100">
      <input
        className="grow h-14"
        value={query}
        onChange={e => modifyQuery(e.target.value)}
        ref={inputRef}
        placeholder=". to search OR / to enter command"
      />
      <Dropdown />
    </nav>
  )
}) 

export default NavBar
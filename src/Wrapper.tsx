import { Outlet } from "react-router-dom";

import AppNav from "./AppNav";
import FavBar from "./FavBar";
import ToolBar from "./ToolBar";

// export default function Wrapper({ children }: { children: React.ReactNode}){
export default function Wrapper() {
  // todo: move this setting to content
  const SHOW_FAVBAR = true;

  return (
    <>
      {SHOW_FAVBAR ? <FavBar /> : null}
      <AppNav />
      {/* <ToolBar /> */}

      <div className='container mx-auto py-100'>
        <Outlet />
      </div>

    </>
  )
}
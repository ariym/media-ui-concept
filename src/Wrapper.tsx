import { Outlet } from "react-router-dom";

import BetterNav from "./BetterNav";

// export default function Wrapper({ children }: { children: React.ReactNode}){
export default function Wrapper() {
  return (
    <>
      <BetterNav />
      <div className='container mx-auto'>
        <Outlet />
      </div>
    </>
  )
}
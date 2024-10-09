import Sidebar from "./Sidebar";
import SidebarSmall from "./SidebarSmall";

export default function Sidebarhandle() {
    return (
        <>
            <div className='hidden 2xl:block w-1/5 bg-white'>
                <Sidebar />
            </div>
            <div className='block 2xl:hidden bg-white'>
                <SidebarSmall />
            </div>
        </>
    )

}
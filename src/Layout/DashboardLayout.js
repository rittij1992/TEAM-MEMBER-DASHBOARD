import Topbar from "../Components/Topbar/Topbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
        
            <Topbar></Topbar>
            <div className="grid grid-cols-6">

                {/* <!-- First Column (20% width) --> */}
                <div className="col-span-1 p-4">
                    <Sidebar></Sidebar>
                </div>

                {/* <!-- Second Column (80% width) --> */}
                <div className="col-span-5 p-4 mt-4 border rounded-lg">
                    <Outlet></Outlet>
                </div>
            </div>

        </>
    )
}

export default DashboardLayout;
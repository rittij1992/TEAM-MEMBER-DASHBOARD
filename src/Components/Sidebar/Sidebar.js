import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [overView, setOverView] = useState(true);
    const [directory, setDirectory] = useState(false);

    const handleClick1 = () => {
        setOverView(true);
        setDirectory(false);
    }

    const handleClick2 = () => {
        setOverView(false);
        setDirectory(true);
    }
    return (
        <>
            <div className="my-5 px-4 font-bold">
                <ul>
                    <li className="font-inter">
                        <Link to='/' onClick={() => handleClick1()} 
                        className={overView ? "text-violet-600" : null}>
                            <i className="fa-solid fa-border-all border-4 rounded-md"></i>
                            Overview
                        </Link>
                    </li>
                    <li className="font-inter my-4">
                        <Link to='/people' onClick={() => handleClick2()} 
                        className={directory ? "text-violet-600" : null}>
                            <i className="fa-solid fa-border-all border-4 rounded-md"></i>
                            People Directory
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
import { useContext } from "react";
import { ProfileContext } from "../../../ContextApi/ProfileContext";
import { Link } from "react-router-dom";

const ProfileDetails = () => {
    const { profileDetails, setProfileDetails } = useContext(ProfileContext);
    return (
        <>
            <div style={profileDetails.name ? { display: "block" } : { display: "none" }} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src={profileDetails.avatar} alt="Modern building architecture" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-lg font-semibold underline">Member Details</div><Link to='/edit-people' className="font-bold py-3 hover:bg-gray-50">Edit<i className="fa-solid fa-pencil py-3 px-3 hover:bg-gray-50 text-blue-500"></i></Link>
                        <div className="text-xs text-blue-400">Name - {profileDetails.name} <br></br> Role - {profileDetails.role}</div>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">Incredible accommodation for your team</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">Parsonal Details - <br></br><span className="text-xs text-violet-600">Email - {profileDetails.email} <br></br> DOB - XX - XX - XXXX</span></p>
                        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                    <div>
                        <button onClick={() => setProfileDetails({})} type="button" className="border rounded p-1 m-2 bg-violet-600 text-white">Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetails;
import { Link } from 'react-router-dom';
import stockimg from '../../stockimg.jpg'
const Topbar = () => {

    return (
        <>
            <header className="bg-white border-b border-inherit">
                <nav aria-label="Global" className="mx-auto flex max-w-full items-center justify-between lg:px-9">
                    <div className="flex lg:flex-1">
                        <Link to='/' className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <h1 className="font-inter font-bold text-violet-600 text-4xl">PEOPLE.CO</h1>
                        </Link>
                    </div>
                    <div className="py-6 mx-5">
                        <Link
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                            <i className="fa-regular fa-bell"></i>
                        </Link>
                    </div>
                    <div className="py-6 mx-3">
                        <Link
                            className="-mx-3 block rounded-lg px-2 py-1 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                            <img style={{ width: "3rem", borderRadius: "50%" }} alt="profile pic" src={stockimg} />
                        </Link>
                    </div>
                    <div className="py-6">
                        <h2 className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-semibold leading-7">Jane Doe</h2>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Topbar;
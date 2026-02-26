import { Link } from "react-router-dom"


export default function Navbar() {
    const navLinkStyle = "hover:text-sky-700";
    const buttonStyle = "px-4 py-2 text-white rounded hover:bg-sky-800";
    
    return (
        <nav className="sticky top-0 flex bg-gray-200 shadow-md p-4 z-100">
            <div className="flex justify-between items-center flex-wrap gap-4
            max-w-300 mx-auto w-full">

                <Link to="/"
                    className="font-bold text-2xl">
                    ShopHub</Link>


                <div className="flex gap-4 items-center">
                    <Link to="/"
                        className={navLinkStyle}>
                        Home</Link>
                    <Link to="checkout"
                        className={navLinkStyle}>
                        Cart</Link>
                </div>

                <div className="flex gap-4 items-center">
                    <Link to="/auth"
                        className={`${buttonStyle} bg-gray-700`}>
                        Login</Link>
                    <Link to="/auth"
                        className={`${buttonStyle} bg-sky-700`}>
                        Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}
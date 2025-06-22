
import { CiShoppingBasket, CiHeart, CiSearch } from "react-icons/ci";
import HeaderCounter from "../HeaderCounter";
import useHeaderRightBar from "@hooks/useHeaderRightBar";
import { Link, useNavigate } from "react-router-dom";

const HeaderRightBar = () => {
    const { totalWishlist, totalCart } = useHeaderRightBar();
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between">
            <div className="relative cursor-pointer mx-5" onClick={() => navigate("/search")}>
                <CiSearch className="text-primary text-[25px]" />
            </div>
            <HeaderCounter page="/wishlist" totalQuantity={totalWishlist} svgIcon={<CiHeart className="text-primary text-[25px]" />} />
            <HeaderCounter page="/cart" totalQuantity={totalCart} svgIcon={<CiShoppingBasket className="text-primary text-[25px]" />} />
            <div className="hidden lg:flex">
                <Link to="/register">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Register
                        </span>
                    </button></Link>
                <Link to="/sign-in">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Login
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HeaderRightBar
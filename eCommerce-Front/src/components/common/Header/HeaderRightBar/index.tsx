
import { CiShoppingBasket, CiHeart, CiSearch } from "react-icons/ci";
import HeaderCounter from "../HeaderCounter";
import useHeaderRightBar from "@hooks/useHeaderRightBar";
import { useNavigate } from "react-router-dom";

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
        </div>
    )
}

export default HeaderRightBar
import { TLoading } from "@types"
import CategorySkeleton from "../skeleton/categorySkeleton";
import productSkeleton from "../skeleton/productSkeleton";
import cartSkeleton from "../skeleton/cartSkeleton";
import LottieHandler from "../lottieHandler";


interface ILoading {
    status: TLoading;
    error: string | null;
    children: React.ReactNode;
    type?: keyof typeof skeletonTypes;
}

const skeletonTypes = {
    cart: cartSkeleton,
    product: productSkeleton,
    category: CategorySkeleton,
}

const Loading = ({ status, error, children, type = "category" }: ILoading) => {   
    const Skeleton = skeletonTypes[type]
    
    if (status === "pending") {
        return <Skeleton/>;
    }
    if (status === "failed") {
        return (
            <div>
                <LottieHandler type="error" message={error as string}/>
            </div>
        )
    }
    return (
        children
    )
}

export default Loading
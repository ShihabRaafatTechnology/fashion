import { TLoading } from "@types"
import CategorySkeleton from "../skeleton/categorySkeleton";
import productSkeleton from "../skeleton/productSkeleton";
import cartSkeleton from "../skeleton/cartSkeleton";


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
        return (<p>Message Error: {error}</p>)
    }
    return (
        children
    )
}

export default Loading
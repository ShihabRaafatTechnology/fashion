import { TLoading } from "@types"

interface ILoading {
    status: TLoading;
    error: string | null;
    children: React.ReactNode;
}

const Loading = ({status, error, children}: ILoading) => {
    if(status === "pending"){
        return (<p>Loading...</p>)
    }
    if(status === "failed"){
        return (<p>Message Error: {error}</p>)
    }
    return (
    children
  )
}

export default Loading
import { isAxiosError } from "axios"

const axiosError = (error:unknown) => {
    if(isAxiosError(error)){
        error.response?.data.message || error.message
    }else{
        "An unexpected error"
    }
}

export default axiosError
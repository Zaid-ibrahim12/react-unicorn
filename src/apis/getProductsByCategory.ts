import { endpoints } from "../constant/endpoints"
import { api } from "../helper/api"
import { useQuery } from 'react-query'
import { productType } from "../types/product-type"


type useProductApiType = {
    data: Array<productType>
}
export const useProductsByCategoryApi = (category: string | undefined): useProductApiType => {
    const fetchData = () => api.get(endpoints.get_product_by_category(category))
    const { data } = useQuery(endpoints.get_product_by_category(category), fetchData)
    return { data: data?.data }
}
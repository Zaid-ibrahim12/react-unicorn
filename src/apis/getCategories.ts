import { endpoints } from "../constant/endpoints"
import { api } from "../helper/api"
import { useQuery } from 'react-query'
import { productType } from "../types/product-type"


type useProductApiType = {
    data: Array<productType>
}
export const useCategoriesApi = (): useProductApiType => {
    const fetchData = () => api.get(endpoints.get_categories)
    const { data } = useQuery(endpoints.get_categories, fetchData)
    return { data: data?.data }

}
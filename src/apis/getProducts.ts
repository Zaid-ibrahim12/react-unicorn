import { endpoints } from "../constant/endpoints";
import { api } from "../helper/api";
import { useQuery } from "react-query";
import { productType } from "../types/product-type";

type useProductApiType = {
  isLimit?: boolean;
};

type returnProductApiType = {
  data: Array<productType>;
};

export const useProductApi = (
  props: useProductApiType
): returnProductApiType => {
  const { isLimit } = props;

  const link = isLimit ? endpoints.getLimit : endpoints.getAll;

  const fetchData = () => {
    return api.get(link);
  };
  const { data } = useQuery(link, fetchData);
  return { data: data?.data };
};

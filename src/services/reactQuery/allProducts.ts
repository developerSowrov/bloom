import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { IProductsProps } from "@/components/common/product/type";
import { fetchAllProducts } from "@/services/axios/requests/products";
import { TFilterState } from "@/components/forPages/products";

const GetAllProducts = (query: TFilterState) => {
  return useQuery<
    { products: IProductsProps[]; allProductsCount: number },
    AxiosError
  >({
    queryKey: ["AllProducts", query],
    queryFn: async () => {
      const response = await fetchAllProducts(query);
      return {
        products: response.data,
        allProductsCount: Number(response.headers["x-total-count"]),
      };
    },
    placeholderData: (previousData) => previousData,
  });
};

export default GetAllProducts;

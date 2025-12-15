import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { IProductsProps } from "@/components/common/product/type";
import { fetchLimitProducts } from "@/services/axios/requests/products";
import { fetchLimitProductsType } from "@/services/axios/requests/products/type";

const GetVitrineProducts = ({ limit, sortBy, order }: fetchLimitProductsType) => {
  console.log(limit, sortBy, order)
  return useQuery<IProductsProps[], AxiosError>({
    queryKey: ["VitrineProducts", limit, sortBy, order],
    queryFn: async () => {
      try {
        const response = await fetchLimitProducts({ limit, sortBy, order });
        return response.data;
      } catch (error: any) {
        throw new Error(error?.message || "Failed to fetch products");
      }
    },
    enabled: !!sortBy, // prevents request if empty
  });
};

export default GetVitrineProducts;

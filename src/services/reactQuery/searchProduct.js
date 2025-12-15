import { useQuery } from "@tanstack/react-query";
import { fetchSearchProduct } from "@/services/axios/requests/products";

const GetSearchProduct = (query) => {
  return useQuery({
    queryKey: ["SearchProduct", query],
    queryFn: async () => {
      try {
        if (!query) return [];
        const response = await fetchSearchProduct(query);
        return response?.data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    enabled: !!query, // prevents API call if query is empty
  });
};

export default GetSearchProduct;
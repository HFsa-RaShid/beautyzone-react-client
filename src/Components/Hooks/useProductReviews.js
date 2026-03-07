import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProductReviews = (productId, page = 1) => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data = {}, isLoading } = useQuery({
    queryKey: ["reviews", productId, page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/reviews/${productId}?page=${page}`);
      return res.data;
    },
    enabled: !!productId,
  });

  return { 
    reviews: data.reviews || [], 
    totalPages: data.totalPages || 1, 
    refetch, 
    isLoading 
  };
};

export default useProductReviews;
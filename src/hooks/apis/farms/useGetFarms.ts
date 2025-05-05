import { FarmApi } from "@/api/farm-api";
import useAxios from "@/hooks/axios/useAxios";
import { FarmType } from "@/types/farm";
import { useQuery } from "@tanstack/react-query";

export interface UseGetFarmsOptions {
  search?: string;
  sort_by?: "date_created" | "date_modified";
  sort_order?: "asc" | "desc";
}

export const useGetFarms = ({
  search = "",
  sort_by = "date_modified",
  sort_order = "desc",
}: UseGetFarmsOptions = {}) => {
  const axios = useAxios();

  return useQuery({
    queryKey: ["all-farms", search, sort_by, sort_order],
    queryFn: async () => {
      const response = await axios.get(FarmApi.readAll, {
        params: { search, sort_by, sort_order },
      });
      return response.data as FarmType[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

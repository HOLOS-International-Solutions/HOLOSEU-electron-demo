import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "@/hooks/axios/useAxios";
import { FarmApi } from "@/api/farm-api";
import { FarmCreateType, FarmType } from "@/types/farm";

export const useCreateFarm = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newFarm: FarmCreateType) => {
      const response = await axios.post(FarmApi.create, newFarm);
      return response.data as FarmType;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-farms"] });
    },
  });
};

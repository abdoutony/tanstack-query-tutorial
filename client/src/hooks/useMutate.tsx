import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const BASE_URL = `http://localhost:5000/api`;
function useMutate(url: string, method: string) {
  const axiosOptions = {
    url: BASE_URL + url,
    method,
  };
  // @ts-ignore
  const { isLoading, isSuccess, error, mutate } = useMutation({
    mutationFn: (data) => {
      return axios({ ...axiosOptions, data });
    },
  });
  return { isLoading, isSuccess, error, mutate };
}

export default useMutate;

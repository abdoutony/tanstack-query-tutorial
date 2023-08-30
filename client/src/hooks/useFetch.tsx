import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const BASE_URL = `http://localhost:5000/api`;
async function getData(url: string) {
  const result = await axios.get(BASE_URL + url).then((res) => res.data);
  return result;
}
export default function useFetch(url: string, key: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: [key],
    queryFn: async () => await getData(url),
  });

  return { data, isLoading, error };
}

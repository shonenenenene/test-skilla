import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './config';
import { GetCallsFilters, GetCallsResponse } from '@/types';

const fetchCalls = async (filters: GetCallsFilters): Promise<GetCallsResponse> => {
  const { data } = await axiosInstance.post('/mango/getList', filters);
  return data;
};
export const useCallsQuery = (filters: GetCallsFilters) => {
  return useQuery({
    queryKey: ['calls', filters],
    queryFn: () => fetchCalls(filters),
    staleTime: 1000 * 60,
  });
};

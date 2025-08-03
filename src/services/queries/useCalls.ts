import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './config';

export type Call = {
  id: number;
  date: string;
  in_out: number;
  duration: number;
  record: string | null;
  partnership_id: string;
};

type GetCallsParams = {
  date_start: string;
  date_end: string;
  in_out?: 0 | 1;
  sort_by?: 'date' | 'duration';
  order?: 'ASC' | 'DESC';
  limit?: number;
  offset?: number;
};

const fetchCalls = async (params: GetCallsParams): Promise<Call[]> => {
  const { data } = await axiosInstance.post('/mango/getList', params);
  return data.results;
};

export const useCalls = (params: GetCallsParams) => {
  return useQuery({
    queryKey: ['calls', params],
    queryFn: () => fetchCalls(params),
    staleTime: 1000 * 60,
  });
};

import { audioAxiosInstance, queryClient } from './config';

export const getCallRecord = async (record: string, partnershipId: string) => {
  const response = await audioAxiosInstance.post(
    '/mango/getRecord',
    {},
    {
      params: {
        record,
        partnership_id: partnershipId,
      },
    }
  );
  return response.data;
};

export const fetchCallRecord = async (record: string, partnershipId: string) => {
  return queryClient.fetchQuery({
    queryKey: ['record', record],
    queryFn: () => getCallRecord(record, partnershipId),
  });
};

import { useCallsQuery } from '@/services/queries/useCallsQuery';
import { GetCallsFilters } from '@/types';
import { getDefaultDateRange } from '@/utils/date';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const CallsList = () => {
  const { date_start, date_end } = getDefaultDateRange();

  const [filters, setFilters] = useState<GetCallsFilters>({
    date_start: date_start,
    date_end: date_end,
    sort_by: 'date',
    order: 'DESC',
  });

  const { data, isLoading, refetch } = useCallsQuery(filters);

  console.log(data);

  return <CallsListWr></CallsListWr>;
};

const CallsListWr = styled.section``;

export default CallsList;

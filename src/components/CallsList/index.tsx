import { useCallsQuery } from '@/services/queries/useCallsQuery';
import { GetCallsFilters } from '@/types';
import { getDefaultDateRange } from '@/utils/date';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import CallsListItem from './CallsListItem';

const CallsList = () => {
  const { date_start, date_end } = getDefaultDateRange();

  const [filters, setFilters] = useState<GetCallsFilters>({
    date_start: date_start,
    date_end: date_end,
    sort_by: 'date',
    order: 'DESC',
  });

  const { data, isLoading, refetch } = useCallsQuery(filters);

  if (isLoading) return <div>Loading...</div>;

  data?.results.map((call) => console.log(call.person_avatar));

  return (
    <CallsListWr>
      {data?.results.map((call) => (
        <CallsListItem key={call.id} data={call} />
      ))}
    </CallsListWr>
  );
};

const CallsListWr = styled.section``;

export default CallsList;

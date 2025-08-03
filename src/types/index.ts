export type Call = {
  id: number;
  date: string;
  in_out: number;
  duration: number;
  record: string | null;
  partnership_id: string;
};

export type GetCallsFilters = {
  date_start: string;
  date_end: string;
  in_out?: 0 | 1;
  sort_by?: 'date' | 'duration';
  order?: 'ASC' | 'DESC';
  limit?: number;
  offset?: number;
};

export type GetCallsResponse = {
  results: Call[];
  total_rows: number;
};

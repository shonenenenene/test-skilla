import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';

export const BASE_URL = 'https://api.skilla.ru/';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const audioAxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
  responseType: 'blob',
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: (prev: unknown) => prev,
      staleTime: Infinity,
    },
  },
});

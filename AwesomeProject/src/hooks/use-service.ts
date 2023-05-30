import { useQuery } from 'react-query';

export const useDataService = (service: Function, ...params: any[]) => {
  return useQuery([service.name, ...params], () => service(...params));
};
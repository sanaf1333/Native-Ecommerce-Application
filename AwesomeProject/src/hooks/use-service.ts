import { useQuery } from 'react-query';

export const useDataService = (service: Function, ...params: any[]) => {
  console.log("hook called")
  return useQuery([service.name, ...params], () => service(...params));
  
};
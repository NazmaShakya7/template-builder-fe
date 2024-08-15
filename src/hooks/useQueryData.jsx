import {
    useQuery, useInfiniteQuery
  } from '@tanstack/react-query';
  import useAxiosPrivate from './useAxiosPrivate';
  
export const useQueryData = (key, path, params) => {
    const axiosPrivate = useAxiosPrivate();
    return useQuery({
      queryKey: key,
      queryFn: () => axiosPrivate.get(path, { params }).then(res => res.data),
    });
  };

  const useInfiniteQueryData = (key, path, params) => {
    const axiosPrivate = useAxiosPrivate();
  
    return useInfiniteQuery({
      queryKey: key,
      queryFn: ({ pageParam = 1 }) =>
        axiosPrivate
          .get(path, { params: { ...params, page: pageParam } })
          .then(res => res.data),
      getNextPageParam: lastPage => lastPage.next ?? undefined,
    });
  };
  
  export const useCompanyFeedData = params => 
    useInfiniteQueryData(['company', params], '/company', params);
  
  export const useTemplateData= idx => 
    useQueryData([`template`,idx], `template/${idx}`)

  export const useSectionData= (idx, sectionIdx) => 
    useQueryData([`template`, idx, sectionIdx], `template/${idx}/section/${sectionIdx}`)
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";


export const useMutateData=(path,method='POST',contentType='application/json') => {
    const queryClient = useQueryClient()
    const axiosPrivate = useAxiosPrivate()
    return useMutation({
        mutationFn: data => 
        axiosPrivate({
            method,
            url:path,
            data,
            headers:{
                'Content-Type': contentType,
            }
        }),
        onSuccess: () => queryClient.invalidateQueries()
    })
}
export const useCompanyCreateMutation = method =>
  useMutateData('company/new');

export const useCompanyDeleteMutation = idx =>
  useMutateData(`company/${idx}`, 'DELETE');

export const useSectionMutation = (idx, sectionIdx,method) =>
    useMutateData([`template`, idx, sectionIdx], `template/${idx}/section/${sectionIdx}`,method);
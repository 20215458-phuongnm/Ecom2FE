import { useQuery } from 'react-query';
import FetchUtils, { ErrorMessage } from 'utils/FetchUtils';
import NotifyUtils from 'utils/NotifyUtils';
import { UseQueryOptions } from 'react-query/types/react/types';

// Hook để lấy dữ liệu của một thực thể theo ID
function useGetByIdApi<O>(
  resourceUrl: string,
  resourceKey: string,
  entityId: number,
  successCallback?: (data: O) => void,
  options?: UseQueryOptions<O, ErrorMessage>
) {
  return useQuery<O, ErrorMessage>(
    [resourceKey, 'getById', entityId],
    () => FetchUtils.getById<O>(resourceUrl, entityId),
    {
      onSuccess: successCallback,
      onError: () => NotifyUtils.simpleFailed('Lấy dữ liệu không thành công'),
      ...options,
    }
  );
}

export default useGetByIdApi;

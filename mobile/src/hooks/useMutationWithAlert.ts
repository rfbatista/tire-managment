import { useEffect, useCallback, useState } from 'react';

export function useMutationWithAlert(useMutation: any, navigation: any) {
  const [mutation, result] = useMutation();
  const [fired, setFired] = useState(false);
  const mutationProxy = async (data: any) => {
    await mutation(data);
    setFired(true);
  };

  useEffect(() => {
    if (fired) {
      setFired(false);
      console.log(result);
      navigation.navigate('Alert', { isSuccess: result.isSuccess });
    }
  }, [fired, result.requestId]);

  return [mutationProxy, result];
}

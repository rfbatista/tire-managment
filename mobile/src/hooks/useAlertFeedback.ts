import { useCallback, useEffect, useState } from 'react';

export function useAlertFeedback(navigation: any) {
  const [isSuccess, setSuccess] = useState(null);
  useEffect(() => {
    if (isSuccess !== null) navigation.push('Alert', { isSuccess: isSuccess });
  }, [isSuccess]);
  return setSuccess;
}

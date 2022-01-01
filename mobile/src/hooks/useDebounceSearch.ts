import React from 'react';
import useDebounce from './useDebounce';

export default function useDebounceSearch(
  initial: string = ''
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [localTerm, setLocal] = React.useState(initial);
  const [searchTerm, setSearch] = React.useState(initial);

  const debouncedSearchTerm = useDebounce(localTerm, 500);
  React.useEffect(() => {
    if (localTerm?.length === 0 || localTerm?.length > 1) {
      setSearch(localTerm);
    }
  }, [debouncedSearchTerm]);

  return [searchTerm, setLocal];
}

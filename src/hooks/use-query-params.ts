import { useSearchParams } from 'react-router-dom';

type UseQueryParams = () => [
  { [x: string]: string },
  (object: { [x: string]: string }) => void
];

export const useQueryParams: UseQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getSearchQueryParams = () => {
    const queryParams: { [x: string]: string } = {};

    searchParams.forEach((value, key) => (queryParams[key] = value));

    return queryParams;
  };

  const updateSearchQueryParams = (object: { [x: string]: string }) => {
    const queryParams = getSearchQueryParams();

    Object.entries(object).forEach(([key, value]) => {
      if (!value) {
        delete queryParams[key];
      } else {
        queryParams[key] = value;
      }
    });

    setSearchParams(queryParams);
  };

  const params = getSearchQueryParams();

  return [params, updateSearchQueryParams];
};

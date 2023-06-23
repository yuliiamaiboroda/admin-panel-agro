import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks';
import { getAllResumes } from 'redux/resumes';
import Box from 'components/Box';

import VacancySelector from 'components/VacancySelector';
import SortSelector from 'components/SortSelector';
import LimitSelector from 'components/LimitSelector';

export default function ResumesFilter() {
  const [isFavoriteFilter, setIsFavoriteFilter] = useState<{
    isFavorite: boolean;
  } | null>(null);
  const [positionFilter, setPositionFilter] = useState<{
    position: string;
  } | null>(null);
  const [sortFilter, setSortFilter] = useState<{ sort: string } | null>(null);
  const [paginationFilter, setPaginationFilter] = useState<{
    limit: string;
  } | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getAllResumes({
        ...isFavoriteFilter,
        ...positionFilter,
        ...sortFilter,
        ...paginationFilter,
      })
    );
  }, [
    dispatch,
    isFavoriteFilter,
    positionFilter,
    sortFilter,
    paginationFilter,
  ]);

  return (
    <Box display="flex" flexDirection={['column', 'column', 'row']} gridGap={4}>
      <label>
        Показати обрані
        <input
          type="checkbox"
          name="isFavorite"
          checked={isFavoriteFilter ? true : false}
          onChange={({ target }) =>
            setIsFavoriteFilter(target.checked ? { isFavorite: true } : null)
          }
        />
      </label>
      <VacancySelector
        onChange={option => {
          setPositionFilter(option?.value ? { position: option.value } : null);
        }}
      />
      <SortSelector
        onChange={option => {
          setSortFilter(option?.value ? { sort: option.value } : null);
        }}
      />
      <LimitSelector
        onChange={option => {
          setPaginationFilter(option?.value ? { limit: option.value } : null);
        }}
      />
    </Box>
  );
}

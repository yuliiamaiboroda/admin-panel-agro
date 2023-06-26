import Box from 'components/Box';
import VacancySelector from 'components/VacancySelector';
import SortSelector from 'components/SortSelector';
import LimitSelector from 'components/LimitSelector';
import type { IResumeFilter } from 'helpers/types';

interface IProps {
  filterStatus: IResumeFilter;
  onSelect: React.Dispatch<React.SetStateAction<IResumeFilter>>;
}

export default function ResumesFilter({ filterStatus, onSelect }: IProps) {
  return (
    <Box display="flex" flexDirection={['column', 'column', 'row']} gridGap={4}>
      <label>
        Показати обрані
        <input
          type="checkbox"
          name="isFavorite"
          checked={filterStatus?.isFavorite ? true : false}
          onChange={({ target }) =>
            onSelect(({ isFavorite, ...rest }) => ({
              ...rest,
              ...(target.checked ? { isFavorite: true } : null),
            }))
          }
        />
      </label>
      <VacancySelector
        onChange={option => {
          onSelect(({ position, ...rest }) => ({
            ...rest,
            ...(option?.value ? { position: option.value } : null),
          }));
        }}
      />
      <SortSelector
        onChange={option => {
          onSelect(({ sort, ...rest }) => ({
            ...rest,
            ...(option?.value ? { sort: option.value } : null),
          }));
        }}
      />
      <LimitSelector
        onChange={option => {
          onSelect(({ limit, ...rest }) => ({
            ...rest,
            ...(option?.value ? { limit: option.value } : null),
          }));
        }}
      />
    </Box>
  );
}

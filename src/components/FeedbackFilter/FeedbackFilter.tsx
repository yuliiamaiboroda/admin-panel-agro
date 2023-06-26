import type { IFeedbackFilter } from 'helpers/types';
import SortSelector from 'components/SortSelector';
import Box from 'components/Box';
import FilterCheckbox from 'components/FilterCheckbox';

interface IProps {
  filterStatus: IFeedbackFilter;
  onSelect: React.Dispatch<React.SetStateAction<IFeedbackFilter>>;
}

export default function FeedbackFilter({ filterStatus, onSelect }: IProps) {
  return (
    <Box display="flex" flexDirection={['column', 'column', 'row']} gridGap={4}>
      <FilterCheckbox
        name="isFavorite"
        title="Показати улюблені"
        onChange={isChecked => {
          onSelect(({ isFavorite, ...rest }) => ({
            ...rest,
            ...(isChecked ? { isFavorite: true } : null),
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
    </Box>
  );
}

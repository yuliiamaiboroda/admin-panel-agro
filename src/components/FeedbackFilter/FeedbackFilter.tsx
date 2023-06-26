import type { IFeedbackFilter } from 'helpers/types';
import SortSelector from 'components/SortSelector';
import Box from 'components/Box';

interface IProps {
  filterStatus: IFeedbackFilter;
  onSelect: React.Dispatch<React.SetStateAction<IFeedbackFilter>>;
}

export default function FeedbackFilter({ filterStatus, onSelect }: IProps) {
  return (
    <Box display="flex" flexDirection={['column', 'column', 'row']} gridGap={4}>
      <label>
        Показати улюблені
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

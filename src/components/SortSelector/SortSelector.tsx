import Selector from 'components/Selector';
import type { ISelector } from 'helpers/types';

const SORT = [
  { value: '', label: 'Спочатку нові' },
  { value: 'asc', label: 'Спочатку старі' },
];

export default function SortSelector({ onChange }: ISelector) {
  return <Selector options={SORT} onChange={onChange} defaultValue={SORT[0]} />;
}

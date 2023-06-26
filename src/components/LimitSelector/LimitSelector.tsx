import Selector from 'components/Selector';
import type { ISelector } from 'helpers/types';

const LIMIT = [
  { value: '2', label: '2' },
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '15', label: '15' },
  { value: '', label: '20' },
  { value: '25', label: '25' },
  { value: '30', label: '30' },
  { value: '40', label: '40' },
  { value: '50', label: '50' },
];

export default function LimitSelector({ onChange }: ISelector) {
  return (
    <Selector options={LIMIT} defaultValue={LIMIT[4]} onChange={onChange} />
  );
}

import type { SingleValue } from 'react-select';

export interface ISelector {
  onChange: (option: SingleValue<{ value: string; label: string }>) => void;
}

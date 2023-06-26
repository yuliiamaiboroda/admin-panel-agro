import type { GroupBase, Props } from 'react-select';
import { StyledSelector } from './Selector.styled';

export default function Selector<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return <StyledSelector {...props} classNamePrefix="selector" />;
}

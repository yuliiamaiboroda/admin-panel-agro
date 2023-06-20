import Select from 'react-select';
import type { GroupBase, Props } from 'react-select';
// import type { CSSObjectWithLabel } from 'react-select';

export default function Selector<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select
      {...props}
      theme={theme => ({ ...theme, borderRadius: 12 })}
      styles={{ container: baseStyle => ({ ...baseStyle }) }}
    />
  );
}

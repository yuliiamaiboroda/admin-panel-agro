export default function stringFormatting(title: string | null, value: string) {
  if (title === null) {
    return value;
  }
  const twoString = title + value;
  if (twoString.length < 34) {
    return value;
  }
  const allowStrLength = 34 - title.length;
  const slicedStr = value.slice(0, allowStrLength);
  const formattedStr = slicedStr + '...';
  return formattedStr;
}

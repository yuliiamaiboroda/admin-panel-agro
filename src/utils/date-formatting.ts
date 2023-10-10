function addLeadingZero(value: number) {
  return String(value).padStart(2, '0');
}

export function transformDate(dateString: string) {
  const birthDate = new Date(dateString);
  const day = birthDate.getDate();
  const monthNumber = birthDate.getMonth();
  const year = birthDate.getFullYear();

  const monthFormatted = addLeadingZero(monthNumber + 1);

  const totalDate = `${day}.${monthFormatted}.${year}`;
  return totalDate;
}

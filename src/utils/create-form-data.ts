export const createFormData = <T extends object>(obj: T) => {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });
  return formData;
};

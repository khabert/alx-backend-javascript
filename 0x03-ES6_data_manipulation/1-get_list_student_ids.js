export default function getListStudentIds(arr) {
  let result;
  const check = Array.isArray(arr);
  if (!check) {
    result = [];
  } else {
    result = arr.map(({ id }) => {
      return id;
    });
  }
  return result;
}

export default function getListStudentIds(arr) {
  try {
    const arrmap = arr.map((x) => x.id);
    return arrmap;
  } catch (error) {
    return [];
  }
}

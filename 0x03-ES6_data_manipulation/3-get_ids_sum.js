export default function getStudentIdsSum(arr) {
  const red = arr.reduce(
    (previous, current) => previous + current.id, 0,
  );
  return red;
}

export default function getStudentsByLocation(arr, city) {
  const cities = arr.filter((x) => x.location === city);
  return cities;
}

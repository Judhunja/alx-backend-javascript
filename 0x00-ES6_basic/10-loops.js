export default function appendToEachArrayValue(array, appendString) {
  const nArr = [];
  for (const idx of array) {
    const value = appendString + idx;
    nArr.push(value);
  }

  return nArr;
}

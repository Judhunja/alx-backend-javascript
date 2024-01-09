export default function cleanSet(set, startString) {
  let newstr = '';
  for (const elem of set) {
    if (elem.startsWith(startString) && startString !== '') {
      if (newstr !== '') {
        newstr += '-';
      }
      newstr += (elem.slice(startString.length));
    }
  }
  return newstr;
}

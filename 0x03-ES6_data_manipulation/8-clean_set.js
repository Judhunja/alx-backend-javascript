export default function cleanSet(set, startString) {
  let newstr = '';
  if (!set || !startString || !(set instanceof Set) || !(typeof startString === 'string')) {
    return newstr;
  }
  for (const elem of set) {
    if (!elem || typeof elem !== 'string' || elem.length < startString.length) return '';
    if (elem.startsWith(startString)) {
      if (newstr !== '') {
        newstr += '-';
      }
      newstr += (elem.slice(startString.length));
    }
  }
  return newstr;
}

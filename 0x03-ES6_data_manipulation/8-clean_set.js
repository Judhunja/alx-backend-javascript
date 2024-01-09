export default function cleanSet(set, startString) {
  let newstr = '';
  for (const elem of set) {
    if (elem.startsWith(startString) && set instanceof Set && typeof startString === 'string' && elem !== undefined && elem !== null && startString !== '' && startString !== null && startString !== undefined) {
      if (newstr !== '') {
        newstr += '-';
      }
      newstr += (elem.slice(startString.length));
    }
  }
  return newstr;
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name();
  }

  setName(name) {
    if (typeof (name) === 'string') {
      this._name = name;
    }
  }

  get length() {
    return this._length();
  }

  setLength(length) {
    if (typeof (length) === 'number') {
      this._length = length;
    }
  }

  get students() {
    return this._students();
  }

  setStudents(students) {
    if (Array.isArray(students) && students.every((i) => typeof i === 'string')) {
      this._students = students;
    }
  }
}

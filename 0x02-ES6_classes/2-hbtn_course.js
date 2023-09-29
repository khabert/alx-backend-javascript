export default class HolbertonCourse {
    /**
     * Creates a new @see {@link HolbertonCourse}.
     *
     * @param {String} name - The name of the course.
     * @param {Number} length - How long the course is (in months).
     * @param {String[]} students - The names of students in the course.
     */
    constructor(name, length, students) {
      this.name = name;
      this.length = length;
      this.students = students;
    }
  
    get name() {
      return this._name;
    }
  
    get length() {
      return this._length;
    }
  
    get students() {
      return this._students;
    }
  
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    set length(newLength) {
      if (typeof newLength !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = newLength;
    }
  
    set students(newStudents) {
      if (!(newStudents instanceof Array)) {
        throw new TypeError('Students must be an array');
      }
      if (!newStudents.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = newStudents;
    }
  }
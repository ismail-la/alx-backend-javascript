/**
 * Implement a class named HolbertonCourse
 */
export default class @link  HolbertonCourse {
  /**
   * Creates a new @link HolbertonCourse
   *
   * @param {String} name - Name of the course
   * @param {Number} length - How long the course is (in months)
   * @param {String[]} students - Names of students in the course
   */
 
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of this course
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course
   */
  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  /**
   * Gets the length of this course (in months)
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (in months)
   */
  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  /**
   * Gets the names of students in this course
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course
   */
  set students(val) {
    if (!(val instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!val.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = val;
  }
}

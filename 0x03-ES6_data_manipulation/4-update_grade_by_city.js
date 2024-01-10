/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* Updates the grades of a list of students in a given city. */
export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((objStudent) => objStudent.location === city)
    .map((student) => {
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }

        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });
      return student;
    });
}

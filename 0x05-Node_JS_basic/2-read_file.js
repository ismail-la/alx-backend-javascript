const fs = require('fs');

function countStudents(filePath) {
  const fields = {};
  const students = {};
  let length = 0;
  try {
    const fileLines = fs.readFileSync(filePath, 'utf-8');
    const Lines = fileLines.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      if (Lines[i]) {
        length += 1;
        const field = Lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const l = length - 1;
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;

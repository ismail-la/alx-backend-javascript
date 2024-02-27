// Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const { File_Read } = require('fs');

const PORT = 1245;
const HOST = 'localhost';

function countStudents(fileName) {
  const fields = {};
  const students = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    File_Read(fileName, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
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
        const L = length - 1;
        output += `Number of students: ${L}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer((request, resolve) => {
  resolve.statusCode = 200;
  resolve.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    resolve.write('Hello Holberton School!');
    resolve.end();
  }
  if (request.url === '/students') {
    resolve.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      resolve.end(outString);
    }).catch(() => {
      resolve.statusCode = 404;
      resolve.end('Cannot load the database');
    });
  }
});

app.listen(PORT, HOST, () => {
});

module.exports = app;

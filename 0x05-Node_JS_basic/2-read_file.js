const fs = require('fs');
const parser = require('csv-parse/sync');

module.exports = function countStudents(filepath) {
  let filectnt;

  try {
    filectnt = fs.readFileSync(filepath, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const data = parser.parse(filectnt, {
    columns: true,
    skip_empty_lines: true,
  });

  console.log(`Number of students: ${data.length}`);

  const studentInField = {};

  data.forEach((student) => {
    const { field } = student;
    if (!studentInField[field]) {
      studentInField[field] = {
        count: 0,
        names: [],
      };
    }
    studentInField[field].count += 1;
    studentInField[field].names.push(student.firstname);
  });

  for (const [field, info] of Object.entries(studentInField)) {
    console.log(`Number of students in ${field}: ${info.count}. List: ${info.names.join(', ')}`);
  }
};

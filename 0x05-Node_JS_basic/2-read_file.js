const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  try {
    const fieldCol = 'field';
    const nameCol = 'firstname';
    const chunk = fs.createReadStream(path);
    const grps = {};
    let count = 0;
    chunk.pipe(csv())
      .on('data', (row) => {
        const field = row[fieldCol];
        const name = row[nameCol];
        count += 1;

        if (!grps[field]) {
          grps[field] = [];
        }
        grps[field].push(name);
      })
      .on('end', () => {
        console.log(`Number of students: ${count}`);
        for (const field in grps) {
          if (Object.prototype.hasOwnProperty.call(grps, field)) {
            console.log(`Number of students in ${field}: ${grps[field].length}. List: ${grps[field].join(', ')}`);
          }
        }
      })
      .on('error', () => {
        throw new Error('Cannot load from the database');
      });
  } catch (error) {
    throw new Error('Cannot load from the database');
  }
}

module.exports = countStudents;

function writeStdout() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.setEncoding('utf-8');

  process.stdin.on('data', (data) => {
    const name = data.trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  });

  if (!process.stdin.isTTY) {
    process.on('exit', () => {
      console.log('This important software is now closing\n');
    });
  }
}

if (require.main === module) {
  writeStdout();
} else {
  module.exports = writeStdout;
}

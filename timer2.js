const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  process.stdout.write('.');
  if (key === '\u0003') { // \u0003 this is ctrl + c
    process.stdout.write("Thanks for using me, ciao!\n" )
    process.exit();
  };
  if (key === 'b') {  // beeps when press b
    process.stdout.write('\x07');
  }
  if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
    process.stdout.write(`setting timer for ${key} seconds...`);

    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key)*1000);
    
  }
});
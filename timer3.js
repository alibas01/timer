let args = process.argv;
args = args.slice(2);
let time = [];
// change to number
for (let num of args) {
  time.push(parseInt(num));
}
for (let item of time) {
  
  setTimeout(() => {

    process.stdout.write('\x07');
    process.stdout.write('beep');
    process.stdout.clearLine();
  }, item * 1000);

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');

    stdin.on('data', (key) => {
      process.stdout.write('.');
      if (key === '\u0003') { // \u0003 this is ctrl + c
        process.exit();
      };
      if (key === 'b') {  // beeps when press b
        process.stdout.write('\x07');
      }
      if (num.includes(key)) {
        setTimeout(() => {
      
          process.stdout.write('\x07');
        }, key*1000);
        process.stdout.write(`setting timer for ${key} seconds...`);
      }
    });





//spinner
let delay = 100;
let interval = 200;
const str = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ' ]

do {
  //for (let i = 0; i < 100; i++) {
    for (let itemx of str) {
      setTimeout(() => {
  
        process.stdout.write(itemx);
      }, delay += interval);
    
    }
  //}  
} while (delay < Math.max(item) * 1000);
}
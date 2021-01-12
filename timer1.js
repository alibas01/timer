let args = process.argv;
args = args.slice(2);
let time = [];
// change to number
for (let num of args) {
  time.push(parseInt(num));
}
// time to beep
for (let item of time) {
  
  setTimeout(() => {

    process.stdout.write('\x07');
    process.stdout.write('beep');
    process.stdout.clearLine();
  }, item * 1000);



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
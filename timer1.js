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
  }, item * 1000);
  
}

let delay = 100;
let interval = 200;
const str = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ' ]

do {
  for (let i = 0; i < 100; i++) {
    for (let item of str) {
      setTimeout(() => {
  
        process.stdout.write(item);
      }, delay += interval);
    
    }
  }  
} while (delay < Math.max(time) * 950);
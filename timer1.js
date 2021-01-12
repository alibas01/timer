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


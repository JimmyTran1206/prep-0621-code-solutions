// create your loops here.

console.log('First assignment');
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

//
console.log('Second assignment');
for (let i = 0, count = 0; count < 10; count++) {
  console.log(i); i += 2;
}

//
console.log('Third assignment');
for (let i = 100; i >= 1; i--) {
  console.log(`Time till explosion ${i} !!!`);
  if (i === 1) { console.log('KABOOOOM!!!!!'); }
}


/* 1 No problem */
const a = 2;
const b = 5;
/* a2 + 2ab + b2 */
let result = Math.pow(a,2) + 2*a*b + Math.pow(b,2)
console.log(result);

/* 2 No problem */
const a = 5;
const b = 4;
 /* a3 + 3a2b + 3ab2 + b3 */
let value = Math.pow(a,3)  +3*Math.pow(a,2)*b + 3*a*Math.pow(b,2) + Math.pow(b,3);
console.log(value);

/* 3 No problem  */
let shahin = 525;
let harun = 600;
//console.log(shahin,harun);
const temp = shahin;
shahin = harun;
harun = temp;
console.log(shahin,harun);


/* destructing */
let shahin = 525;
let harun = 600;
[shahin,harun]=[harun,shahin];
 console.log(shahin,harun);
 


const sum = (...args)=>args.reduce((acc, num) => acc + num, 0);
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
static div = (a, b) => a / b;

exports.MyMath = MyMath;
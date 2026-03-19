// 비교연산자
console.log(5 == 3);
console.log(5 != 3);
console.log(5 == '5');
console.log(5 != '5');
console.log(5 === '5');
console.log(5 !== '5');

// 논리연산자
let a = 10;
console.log(a > 5 && a < 15);
console.log(a > 5 || a < 15);

// 비교 및 논리 연산자
let age = 20;
let isAdult = (age >= 20) ? '성인': '미성년자';
console.log(`나이: ${age}, 결과${isAdult}`);
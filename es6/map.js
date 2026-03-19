// map(인라인함수)

let arr = [1, 2, 3];

const newArr = arr.map(x => x*3);
console.log(newArr);

// 배역 객체
const users = [
    {name: 'jerry', age: 25},
    {name: 'linda', age: 30},
    {name: 'tom', age: 35}
]

const names = users.map(user => user.name)
const ages = users.map(user => user.age)
console.log(names);
console.log(ages);
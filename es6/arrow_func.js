// 함수 선언
let add = (x,y) => {
    return x + y;
}
console.log(add(4,5));

// return 생략가능
let square = (x) => x * x;
console.log(square(10));

// 실행문 한 줄이면 블럭 생략 가능
const message = () => console.log("Good, Luck!");
message();
// 절대값 계산 함수
const times3 = (x) => x * 3

const myAbs = (x) => {
    if(x < 0)
        return -x;
    else
        return x;
}

//export default myAbs;
export {myAbs, times3}
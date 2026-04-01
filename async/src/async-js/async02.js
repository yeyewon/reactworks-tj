// 비동기 처리
function displayA() {
    console.log("A")
}

// 함수 인자로 함수가 매개일 때 콜백함수라고 함
function displayB(callBack) {
    setTimeout(() => {
        console.log("B")
        callBack();
    }, 2000)
}

function displayC() {
    console.log("C")
}

displayA()
displayB(displayC)



// 1~5출력
let i = 1;
while(true){
    console.log(i);
    i++; 
    if(i > 5){
        break;
    }   
}

// 1~5
let j = 1;
let sum = 0;
while(true){
    sum = sum + j
    j++;
    console.log(`j${sum},sum${sum}`);
    if(j > 5){
        break;
    } 
}
console.log(`합계: ${sum}`);
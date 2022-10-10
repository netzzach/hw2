let sum = 0;
function sumNumbers(...numbers){
    for (let i = 0; i < numbers.length; i++){
    if( numbers[i] >=0){
        sum += numbers[i];
    }
}
console.log(sum);
}
sumNumbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
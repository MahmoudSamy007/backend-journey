//1. Minimum
function min(num1, num2){
    if(num1 < num2) return num1
    return num2
}
console.log(min(2,6));
console.log(min(6,2));


//2. Recursion
function isEven(num){
    if(num < 0) num = -num
    if(num === 0) return true
    else if(num === 1) return false
    else return isEven(num - 2)
}



console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


//3. Bean counting (closure)
function countBs(str){
    let count = 0;
    return ()=>{
        for(let i = 0 ; i < str.length ; i++){
            if(str[i] === "B") count ++;
        }
        return count
    }
}
console.log(countBs("BwrwrBsdBVsdBb")());

//3. Bean counting v2
function countChar(str, char){
    let count = 0;
    return ()=>{
        for(let i = 0 ; i < str.length ; i++){
            if(str[i] === char) count ++;
        }
        return count
    }
}
console.log(countChar("BwrwrBsdBVsdBb","w")());



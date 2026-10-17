//first Exercise: Looping a triangle
for(let i = 1 ; i < 8 ; i++){
    let str = ""     
    for(let x = i ; x > 0 ; x--){
        str += "#"
    }
    console.log(str);
}

//first Exercise: Looping a triangle v2
let str = ""
for(let i = 0 ; i < 7 ; i++){
    str += "#"
    console.log(str);
}

//first Exercise: Looping a triangle V3 (author solution)
for(let line = "#" ; line.length < 8 ; line+="#"){
    console.log(line);
}


//second Exercise: FizzBuzz
for(let i = 1 ; i <= 100 ; i ++){
    if((i % 3) === 0 && (i % 5) !== 0){
        console.log("Fizz");
        
    }else if((i % 5) === 0 && (i % 3) !== 0){
        console.log("Buzz");
        
    }else if((i % 5) === 0 && (i % 3) === 0){
        console.log("FizzBuzz");
    }else{
        console.log(i);
    }
}

//second Exercise: FizzBuzz v2 (author solution)
for(let i = 1 ; i <= 100 ; i++){
    let output = ""
    if((i % 3) === 0 && (i % 5) !== 0){
        output += "Fizz"
    }else if((i % 5) === 0 && (i % 3) !== 0){
        output += "Buzz"
    }else if((i % 5) === 0 && (i % 3) === 0){
        output += "FizzBuzz"
    }
    console.log(output || i);
}


//Third Exercise: Chessboard (Incorrect with individual board sizes)
let str2 = ""
let size = 8
for(let i = 0 ; i < size/2 ; i++){
    for(let x = 0 ; x < size/2 ; x++){
        str2 += "#"
        str2 += " "
    }
    str2 += "\n"
    for(let x = 0 ; x < size/2 ; x++){
        str2 += " "
        str2 += "#"
    }
    str2 += "\n"
}
console.log(str2);

//Third Exercise: Chessboard v2
let str3 = ""
let size2 = 8
for(let i = 0 ; i < size2 ; i++){
    for(let x = 0 ; x < size2 ; x++){
        if(((i+x) % 2) == 0){
            str3 += " "
        }else{
            str3 += "#"
        }
    }
    str3 += "\n"
}
console.log(str3);

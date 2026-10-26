//1. The sum of a range
function range(num1, num2, step = 1){
    let arr = [];
    if(num1 > num2 ){
        for(let i = num1 ; i >= num2 ; i += step){
            arr.push(i);
        }
        return arr;
    }
    for(let i = num1 ; i <= num2 ; i += step){
        arr.push(i);
    }
    return arr;
}
function sum(arr){
    let result = 0;
    for (let element of arr) {
        result += element
    }
    return result;
}


//2. Reversing an array
function reverseArray(arr){
    let result = [];
    for(let i = arr.length-1 ; i >=0 ; i--){
        result.push(arr[i])
    }
    return result
}

function reverseArrayInPlace(arr){
    for(let i = 0 ; i < Math.floor(arr.length / 2) ; i++){
        let oldElement = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = oldElement
    }
    return arr
}


//3. A list




//4. Deep comparison
function deepEqual(obj1, obj2){
    if(obj1 === obj2) return true
    if( (typeof(obj1) !== typeof(obj2)) || obj1 === null || obj2 === null || (Object.keys(obj1).length !== Object.keys(obj2).length) ) return false
    for(let i = 0; i < Object.keys(obj1).length ; i++){
        if(Object.keys(obj1)[i] !== Object.keys(obj2)[i]) return false
    }
    for(let i = 0; i < Object.keys(obj1).length ; i++){
        if(obj1[`${Object.keys(obj1)[i]}`] !== obj2[`${Object.keys(obj2)[i]}`]) return false
    }
    
    return true
}




//# Crazy Jacques
/*
let journal = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function addEntry(event, squirrel){
    journal.push({event, squirrel});
    console.log(journal);
}



// 1 (true) => fox , 0 (false) => pizza 
// n00 no fox, no pizza        0
// n01 no fox, pizza           1
// n10 fox, no pizza           2
// n11 fox, pizza              3

//                  binary      decimal
// n00 = 76         00          0
// n01 = 9          01          1 
// n10 = 4          10          2
// n11 1            11          3
// so we can represent this values in a falt array



// phi = (n00*n11 - n01*n10) / sqrt(fox * no fox * pizza * no pizza)

function tableFor(event, journal){
    let table = [0, 0, 0, 0]
    for(let i = 0 ; i < journal.length ; i++){
        let index = 0                                                   //no squirrel, no pizza  => n00
        if(journal[i].events.includes(event)) index += 1                //no squirrel, pizza     => n01
        if(journal[i].squirrel ) index += 2                             //squirrel, no pizza     => n10     and can be squirrel, pizza n11 if the last condition is true
        table[index] += 1
    }
    return table;
}

function journalEvents(journal){
    let eventsInJournal = [];
    for (let x  of journal) {
        for( let y of x.events){
            if(!eventsInJournal.includes(y)){
                eventsInJournal.push(y)
            }
        }
    }
    return eventsInJournal;
}

function phi(table){
    return (
        ((table[0]*table[3]) - (table[1]*table[2])) /
        Math.sqrt(
            (table[0]+table[1]) *
            (table[2]+table[3]) *
            (table[0]+table[2]) *
            (table[1]+table[3])
        )
    )
}

for(let x of journalEvents(journal)){
    let correlation = phi(tableFor(x, journal));
    if(correlation > 0.1 || correlation <-0.1 ){
        console.log(`${x} \t: ${correlation}`);
    }
}
*/

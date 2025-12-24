// Loooping
/*
//For loop
Sum = 0
for(var i = 0;i < 10;i++){
    Sum += i
}
console.log(Sum)
//while Loop
i = 0
while(i<10){
    Sum += i
    i++
}
console.log(Sum)

//do...while Loop
i = 0
do{
    Sum += i
    i++
}while(i<10);
console.log(Sum)

//example1
arr = [10,20,30] // valid
console.log(arr.length)
for(var i = 0;i < arr.length;i++){
    console.log(arr[i])
}

//example2
arr = [10,20,20.5] // valid
console.log(arr.length)
for(i = 0;i < arr.length;i++){
    console.log(arr[i])
}

//example3
arr = [10,20,true,false] // valid
console.log(arr.length)
for(i = 0;i < arr.length;i++){
    console.log(arr[i])
}

//example4
arr = [10,"String","Kongu",20,true] // valid
console.log(arr.length)
for(i = 0;i < arr.length;i++){
    console.log(arr[i])
}


// for in loop
arr = [10,"String","Kongu",20,true] // valid
for (const index in arr) {
    console.log("The value present in ",index," is ",arr[index])
}


// for of loop
arr = [10,"String","Kongu",20,true] // valid
for (const value of arr) {
    console.log(value)
}

// forEach loop

//example 1
arr = [10,"String","Kongu",20,true] // valid
arr.forEach(value => {
    console.log(value)
});
*/

//example2
var kongu = new Object()
kongu["fees"] = 100000
kongu["accomodation"] = "Execelent"
kongu["food"] = "Pretty Decent"
kongu["hostelCount"] = 10
//console.log(kongu)
//for in eg => Output= key
// for (key in kongu) {
//     console.log(key,kongu[key])
// }
kongu = Object.entries(kongu)
//console.log(kongu)
//for each eg
kongu.forEach(([key,element]) => {
    console.log(key,":",element)
});
//for of
for ([key,value] of kongu) {
    console.log(key,":",value)
}
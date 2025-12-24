/*
arr = [10,20,30]

console.log("----for loop----");
for(i = 0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("---for of loop---");
for(i of arr){
    console.log(i);
}
console.log("---for in loop---");
for(i in arr){
    console.log(i, arr[i]);
}
*/
// Object with Key value pair
vcet = {
    'IT':50,
    'CSE':51,
    'CCE':52,
    'CYS':53
}

/*console.log("---for of loop for all values---");
for (i of Object.values(vcet)){
    console.log(i);
}

console.log("---for of loop for all keys---");
for (i of Object.keys(vcet)){
    console.log(i);
}

console.log("---for of loop for all entries---");
for (i of Object.entries(vcet)){
    console.log(i);
}*/

console.log("---for of loop for all keys---");
for (i in vcet){
    console.log(i);
}

console.log("---for of loop for all values---")
for (i in vcet){
    console.log(vcet.i);
}
console.log("---for of loop for all entries---");
for (i in vcet){
    console.log(i,vcet[i]);
}

/*
//Functions
//Example 1 => Function without Argument and without return type
function fun(){
    console.log("Function Sample example")
}
fun()

//Example 2 => Function with Argument and without return type
function fun(a,b){
    console.log("Function with Argument and without return type")
    for(i = a; i < b;i++){
        if (i % 2 == 0){
            console.log("The number "+i+ " is even")
        }
        else{
            console.log("The number "+i+ " is odd")
        }
    }
    
}
fun(5,10)
*/
//Example 3 => Function with Argument and with return type
function fun(a){
    return a,b
}
console.log(fun(5))

//Example 4 => Function without Argument and with return type
function fun(){
    var a = 10
    return a
}
console.log(fun())
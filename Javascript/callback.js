function database(){
    a = "Prasanth"
    b = "RAMPeX"
    c = "MERN"
    console.log(a,b,c);
    console.log("Data came");
}
function formSubmission(db){
    setTimeout(()=>{
        console.log("button Clicked");
        db();
        console.log("Form Submitted");
    },1000);
}
formSubmission(database)
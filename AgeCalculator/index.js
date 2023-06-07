
function calculate() {
    let userinput = document.getElementById("age").value;
    const date = new Date();
    let curryear = date.getFullYear();
    const userdate = new Date(userinput);
    let birthyear = userdate.getFullYear();
    let age = curryear - birthyear
    return document.getElementById("userage").innerHTML=`Your age is ${age}`
}
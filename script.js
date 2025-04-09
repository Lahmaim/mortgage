let mycalasElement = document.getElementById("calculator");
let mytermElement = document.getElementById("term");
let myrateElement = document.getElementById("rate");
// let mybotoonElement = document.getElementById("button");
let mystartfoter = document.getElementById("startfooter");
let myfoterend = document.getElementById("endfoter");
let myresolt = document.getElementById("resolt");
let myerour1 =document.getElementById("erour1");
let myerour2 =document.getElementById("erour2");
let myerour3 =document.getElementById("erour3");

function calculate ( ){
    var element = mycalasElement.value * (myrateElement.value*(1+myrateElement.value)^mytermElement.value) / ((1+myrateElement.value)^mytermElement.value-1)
 myfoterend.style.display="flex"
 mystartfoter.style.display ="none"
 myresolt.innerHTML=element.toFixed(2)
 if (
     mycalasElement.value == "" 
 )
 {
 myerour1.style.display="block"
  myfoterend.style.display="none"
 mystartfoter.style.display ="flex"
 }
 else{
    myerour1.style.display="none"
 }
if (mytermElement.value == "")
{
    myerour2.style.display ="block"
     myfoterend.style.display="none"
 mystartfoter.style.display ="flex"
}
else{
    myerour2.style.display="none"
}
if ( myrateElement.value == "")
{
    myerour3.style.display ="block"
    myfoterend.style.display="none"
 mystartfoter.style.display ="flex"
}
else {
    myerour3.style.display="none"
}
}
var intialprice=document.querySelector("#intialprice")
var quantity=document.querySelector("#quantity")
var currentprice=document.querySelector("#currentprice")
var button=document.querySelector("#button")
var output=document.querySelector("#output")


function profitlosscalculator(intial,number,current){
    if(intial>current){
var loss=(intial-current)*quantity;
var losspercentage=(loss/intial)*100;

showmessage('your loss is ${loss} and profit percentage is ${losspercentage}%');
    }
    else if(intial<current){
var profit=(current-intial)*quantity;
var profitpercentage=(profit/intial)*100;
showmessage('your profit is ${profit} and profit percentage is ${profitpercentage}%');
    }
    else{
showmessage("no loss no profit");
    }
}
function showmessage(message){
    output.innerHTML=message;
}

function onclickhandler(){
var intial=intialprice.value;
var number=quantity.value;
var current=currentprice.value;
profitlosscalculator(intial,number,current)

}
button.addEventListener("click",onclickhandler)


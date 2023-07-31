
//access full array
const friendList=["sajib","rakib molla","sabbir","antor","rahim"];
friendList.forEach((item,index,array)=>{
 console.log(`name:${item},index ${index}`);
})
document.getElementById("seefriend").innerHTML=friendList.length;


//access first element array

let firstperson=friendList[0];
document.getElementById("seefriend").innerHTML=firstperson;

//access last element array
let lastperson = friendList[friendList.length -1 ];
document.getElementById("seefriend").innerHTML=lastperson;


//looping array element
let friendLength=friendList.length;
let text = "<ul>";

for(let i=0;i<friendLength;i++){
   const element=friendList[i];
   text += "<li>" + element + "</li>";
   
}
text += "</ul>";
document.getElementById("seefriend").innerHTML=text;

//Adding Array Elements
friendList.push("tuko");
document.getElementById("seefriend").innerHTML=friendList;
let typecheck=typeof friendList;
console.log(typecheck);
Array.isArray(friendList);

//array to string
const nyokList=["manna","sakib khan","bappi","josim"];
let convertString=nyokList.toString();
document.getElementById("seefriend").innerHTML=typeof convertString;
let adultnayok=nyokList.pop();
document.getElementById("seefriend").innerHTML=nyokList;

//JavaScript Array.forEach()


const numbers=[20,50,10,40];
let txt="";
numbers.forEach(numberlist);
document.getElementById("shownumber").innerHTML=txt;
function numberlist(value,index,array){
   txt += value +'<br>';
}

//array map
const numbers1=[10,50,100,30,200];
const number2=numbers1.map(jogkor);

document.getElementById("shownumber").innerHTML=number2;
function jogkor(x,y){
return x*2;
}

//array filter
const studentResult=[12,50,78,99,64,32,19,33];
const passStudent=studentResult.filter(findPassResult);
document.getElementById("shownumber").innerHTML=passStudent;
function findPassResult(result){
 return result>=33;
}

//array reduce
const bookprice=[500,600,800,200];
const booktotalprice=bookprice.reduce(totaltk);
document.getElementById("shownumber").innerHTML=booktotalprice;
function totaltk(total,amount){
    return total+amount;
}

//array every
const result=[42,33,44,55,99];
const passresult=result.every(folafol);
document.getElementById("shownumber").innerHTML=passresult;
function folafol(result){
   return result>=33;
}
//Array indexof
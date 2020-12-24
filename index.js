// // calculate age by js
// // take variable
// let current_date = document.getElementById('current_date').value;

// let  current_month = document.getElementById('current_month').value;
// let  current_year = document.getElementById('current_year').value;

// let  birth_day =  document.getElementById('birth_day').value;
// let birth_month =  document.getElementById('birth_month').value;
// let birth_year = document.getElementById('birth_year').value;


// // days of every months
// // var month = [31,28,31,30,31,30,31,31,30,31,30,31];
// // if current day is less than birth day follow the condition24\
// if(birth_day > current_date){
//     // current date will = currnt day + add month day from bith month before one
//     current_date = current_date + 30;
//     // calculate currnt month
//     current_month = current_month - 1;
 
// }else{
//      day = current_date - birth_day;
// }


// // if current month is less than birth month follow the condition
// if(birth_month > current_month){
//       // current year
//   current_year = current_year - 1;
//   // calculate currnt month 
//   current_month = current_month  + 12; // we need to sub with birth month thts why we add 12 
//   //as year = 12
 

// }else{
//      month1 = current_month - birth_month;
// }

// // date = current_date  - birth_day;// calculate actual day you spent in world
// // month1 = current_month - birth_month; // calculate actual month you spent in world

//  // calculate actual year you spent in world
// function showme(){
//     var day = current_date - birth_day;
//     var month1 = current_month - birth_month;
//     var year = current_year - birth_year;
//     console.log(day);
// console.log(month1);
// console.log(year);
// }
//  showme();



// calculate age by js
// take variable
var current_date = document.getElementById('current_date');

let  current_month = document.getElementById('current_month');
let  current_year = document.getElementById('current_year');

let  birth_day =  document.getElementById('birth_day');
let birth_month =  document.getElementById('birth_month');
let birth_year = document.getElementById('birth_year');
///////////////
var successme = document.getElementById('success');
var resetme = document.getElementById('reset');
var message = document.getElementById('here');
///////////
let cD = Number(current_date.value);
let cM = Number(current_month.value);
let cY = Number(current_year.value);
let bD = Number(birth_day.value);
let bM = Number(birth_month.value);
let bY = Number(birth_year.value);
// days of every months
// var month = [31,28,31,30,31,30,31,31,30,31,30,31];
// if current day is less than birth day follow the condition24\
if(bD> cD){
    // current date will = currnt day + add month day from bith month before one
    cD = cD + 30;
    // calculate currnt month
    cM = cM - 1;
 
}else{
     day = cD - bD;
}


// if current month is less than birth month follow the condition
if(bM > cM){
      // current year
  cY = cY - 1;
  // calculate currnt month 
  cM = cM + 12; // we need to sub with birth month thts why we add 12 
  //as year = 12
 

}else{
     month1 = cM - bM;
}

// date = current_date  - birth_day;// calculate actual day you spent in world
// month1 = current_month - birth_month; // calculate actual month you spent in world

 // calculate actual year you spent in world
function showme(){
    var day,month1,year;
     day = cD - bD;
     month1 = cM - bM;
     year = cY - bY;
    //"20 years 6 months 15 days:
    var myage = "Age : " + year + " years " + month1 + " months " + day + " days";
    message.textContent = myage;
   
}

 function reset(){
    current_date.value = '';
    current_month.value = '';
    current_year.value = '';
    birth_day.value = '';
    birth_month.value = '';
    birth_year.value = '';
    message.textContent = '';
   
 }
// juzment
function eventHandeler(){
    if(Number(current_date.value) && Number(current_month.value)&& Number(current_year.value)&& Number(birth_day.value)&& Number(birth_month.value)&& Number(birth_year.value)){
        showme();
    }else{
        alert("Please provide valid inputs");
        reset();
    }
}

successme.addEventListener('click',eventHandeler);
resetme.addEventListener('click',reset);
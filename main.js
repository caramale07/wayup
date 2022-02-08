// task1
const name='Baku';
const country = 'Azerbaijan';
const population = 2300000;
const footbal = true;


//task2
let h = 40,
    a = 70;
let area = a*h/2;


//task3
let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;

let result= (speedOfFirst+speedOfSecond)*time;



//task4
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
if(randomNumber<20) {
    console.log("the number is less than 20");
} else if (randomNumber>50){
    console.log("the number is bigger than 50");
} else {
    console.log("the number is bigger than 20 and less than 50");
}


//task5  SWITCH CASE НЕ РАБОТАЕТ ПРИ СРАВНЕНИИ ЧИСЕЛ. МОЖНО ПРОВЕРЯТЬ ТОЛЬКО ОТДЕЛЬНЫЕ СЛУЧАИ 


// const randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);
// switch(randomNumber) {
//     case randomNumber<20:
//         console.log("the number is less than 20");
//         break;
//     case randomNumber>50:
//         console.log("the number is bigger than 50");
//         break;
//     default:
//         console.log("the number is bigger than 20 and less than 50");
// }
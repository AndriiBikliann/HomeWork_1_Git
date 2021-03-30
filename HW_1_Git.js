/*Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.*/
let newArr = [11,12,-3,-5,-10,67,34,56]
newArr.forEach((val,i,arr) => {
   if (val<0)
      newArr [i] =  0 ;
})
document.write(newArr);

/*Задача 2. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, які менші за задану.*/

let newArr = [11,12,-3,-5,-10,67,34,56,13,35,56]
let mainPrice = parseInt(prompt("Введіть ціну",""));

newArr.map((val,i,arr) => { if (val<mainPrice) 
  document.write(val);
 } );

 /*Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн. 
додати 20% ціни, для тих, які більші за 1000 грн. відняти 30%.*/

let newArr = [1000,1200,800,900,1300,1400,500];

let newArr2 = newArr.map((val,i,arr) => { 
   if (val<=1000)
      return val + 0.2*val;
   if (val>1000)
      return val - (0.3*val);
 } );
 document.write(newArr2);

 /*Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.*/

let nameArr = ["Anna","Alla","Barbara","Cintia","Debora","Inna","Francheska","Gabriela"];
let name = prompt("Введіть першу літеру імені");

let newArr = nameArr.filter((val,i,arr) => {
   let newName = val.toUpperCase()
   return newName[0] === name ; 
})
document.write(newArr);

/*Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).*/

let newArr = [1000,1200,800,900,1300,1400,500,2200,3000,4000,2800];

let newArr2 = newArr.map((val,i,arr) => { 
   if (val<=2000)
      return val ;
 } );
 document.write(newArr2);

 /*Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня. 
З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.*/

let weekArr = [11, 9, 12, 34, 56, 13, 20];

if(weekArr.some( val => val<10 ))
   document.write("Так було");
     else
   document.write("Ні");

/*Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».*/
let arr = ["a","b","c","a","f","r","w","a","a","e","r"];

let newArr = arr.filter ((val, i, arr) => {
       if (val === "a")
   document.write(val);
   });

/*Задача 8. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.*/

let newArr = [12,2,5,10,3];

let result = newArr.reduce((acc, rec) => acc * rec);
document.write(result);

/*Задача 9. Розробити функцію, яка би для довільної кількості чисел знаходила максимальне.*/

let newArr = [12, 13, 89, 90, 45, 4, 5];

//let largest = Math.max.apply(Math, newArr);
//document.write(largest);

let arr = newArr.sort(function (a,b) {return b-a;})[0];
document.write(arr);

/*Задача 2.1-1. Відсортувати масив імен за однаковою останньою літерою.*/

let nameArr = ["Ivan", "Maria", "Denis", "Inna", "Rada"];


let newArr = nameArr.filter((val, i, arr) => {
   let name = val.toUpperCase()
   if (name[0][name.length-1] === name[0+i][name.length-1])
   return val;
})
document.write(newArr);

/*document.write(nameArr);
document.write('<hr>');
let newArr=nameArr.map(elCopy=>elCopy[0]);
document.write(newArr)*/

/*Задача 2.1. Відсортувати масив імен за останньою літерою.*/

let nameArr = ["Ivan", "Maria", "Denis", "Inna", "Rada", "Andrij"];

nameArr.sort (function(a,b){
   let lastA = a.charAt(a.length - 1);
   let lastB = b.charAt(b.length - 1);
   if (lastA > lastB){
      return 1;
   } else if (lastA < lastB){
      return -1;
   } else {
      return 0;
   }
});
document.write(nameArr);

/*Задача 2.2. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% (помножити на 0.8), 
а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).*/
let newArr = [1000,1200,800,900,1300,1400,500,1800,2000];

let newArr2 = newArr.map((val,i,arr) => { 
   if (val>=1000)
      return val*0.8;
   if (val<1000)
      return val*0.95;
 } );
 document.write(newArr2);

 /*Задача 2.3. Дано масив років народження працівників. Вивести масив тих, які є призовного віку (менше 25 років).*/

let newArr = [26,25,18,30,40,19,21];

let newArr2 = newArr.filter((val,i,arr) => { 
   if (val<=25)
      return val;
 } );
 document.write(newArr2);

 /*Задача2.4. Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які є меншими за 115.*/

let newArr = [115,125,118,130,40,19,21];

let newArr2 = newArr.filter((val,i,arr) => { 
   if (val<=115)
      return val;
 } );
 document.write(newArr2);

 /*Задача 2.5 Дано масив цін товарів. Сформувати масив тих, які є меншими за 2000грн.*/

let newArr = [2115,1125,2118,1130,140,119,2221];

let newArr2 = newArr.filter((val,i,arr) => { 
   if (val<=2000)
      return val;
 } );
 document.write(newArr2);

/*Задача 2.6. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.*/

let newArr = [2115,1125,2118,1130,140,119,2221];

let newArr2 = newArr.filter((val,i,arr) => { 
   if (val<=2000 && val>=100)
      return val;
 } );
let result = newArr2.reduce((a,b)=>a+b);
document.write(result);

/*Задача 2.7. Дано масив номерів автомобілів. Сформувати масив тих, 
які починаються на літеру «А» і закінчуються на літеру «Р».*/

let newArr = ["A5803p", "B4537r", "S3456p", "A3214p", "Q3457s"];

let newArr2 = newArr.filter((val, i, arr) => {
   let name = val.toUpperCase()
   return name[0] === "A" && name[name.length-1] === "P";
})
document.write(newArr2);

/*Задача 2.8. Дано масив літер. Сформувати рядок, який складається тільки з голосних літер.*/

let newArr = ['a','r','w','s','r','a','i','q','x','o','v','r','t','h','k','t','l','i','u','p'];

let result = newArr.filter(str => /^[aeiou]/i.test(str));
document.write(result);

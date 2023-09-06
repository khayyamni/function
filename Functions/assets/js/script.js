'use strict'


//1) Verilmiw n - ededinin 3-e ve 7-e bolunmesini tapin


// function name(){
//     let n = 21;
//     if(a%3==0 && a%7==0){
//         console.log("Bolunur")
//     }
//     else{
//         console.log("Bolunmur");
//     }
// }

// name();


// let name = (n) =>{
//     if(n %3 == 0 && n % 7 == 0){
//         return "Bolunur"
//     }
//     else{
//         return "Bolunmur"
//     }
// }

// let result = name(21)

// console.log(result);



//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 


// function factNum(number){
//     let result = 1;

//     for ( let i = 1; i <= number; i++) {
      
//         result*=i;
//     }
//     return result;
// }

// console.log(factNum(4));


// let factNum = (n) => {
    
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result*=i;
//     }

//     return result;

// }

// let count = factNum(5);

// console.log(count);



//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// function numbers(arr){
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 ==0) {
//             count+=arr[i]**2
//         }
        
//     }
//     return count;
// }


// console.log(numbers([2,7,4,6,1]));


// let numbers = () => {
//     let count = 0;

//     let arr = [2,7,4];

//     arr.forEach(element => {
//         if(element % 2 ==0) {
//             count+=element**2;
//         }
        
//     });
//     console.log(count);
// }
//  numbers();


//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 


// function nameUser(mail,password){
//     if(mail == "cavid@code.edu.az" && password== "12345"){
//         console.log("Girish olundu");
//     }
//     else{
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }

// nameUser("cavid@code.edu.az","12345")


// let nameUser = (mail,password) =>{
//     if(mail == "cavid@code.edu.az" && password== "12345"){
//         console.log("Girish olundu");
//     }
//     else{
//         console.log("Mail ve yaxud password sehvdir");
//     }
// } 

// nameUser("cavid@code.edu.az","12345")



//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// function oddNum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
        
//         if (arr[i] %2 == 1) {
//             sum+=arr[i]
//         }
//     }
//     return sum
// }

// let result = oddNum([1, 6, 5, 7, 4])
// console.log(result);


// let oddNum = (arr) =>{
//     let sum = 0;
//     arr.forEach(array => {
//         if (array % 2 == 1) {
//             sum+=array
//         }
//     });
//     return sum;
// }

// console.log(oddNum([3, 4, 7, 1]));


//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.


// function doubleNums(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
        
//     }
//     return count;
// }
// let count = doubleNums([10, 1, 6, 4, 9])
// console.log(count);


// let doubleNums = (array) =>{
//     let count = 0; 
//     array.forEach(arr => {

//         if (arr % 2 == 0) {
//             count++
//         }
//     });
//     return count;
// }

// console.log(doubleNums([2, 1, 5]));
function add7(number){
    return number+7;
}
console.log("The number after adding 7 is:",add7(5));


function multiply(a,b){
    return a*b;
}
let result= multiply(3,5);
console.log("multiplication is:",result);


function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
}
console.log(capitalize("hello"));
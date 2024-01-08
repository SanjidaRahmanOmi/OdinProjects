// Normal for loop
let sum=0;
for(i=0;i<=10;i++){
    sum=sum+i;
}
console.log(sum);

// for in loop
let obj={
    name: "Omi",
    role: "Programmer"
}
for (const key in obj){
        const element = obj[key];
        console.log(key,element)
        
    }
    /*
    output:
    name Omi
    role Programmer
    */
   
    //for of loop
    for (const iterator of "omi") {
        console.log(iterator)      
    }
    //Output will show the individual letter of "omi"
    
let arr = [1,2,3,4,5,6,];
console.log("Length of array: ",arr.length);
console.log("element of index 0 is: ",arr[0]);
arr[0]=10; //It change the element of index 0.
console.log(arr.join(" and ")); //output: 10 and 2 and 3 and 4 and 5 and 6
//console.log(arr.pop());
arr.push(7);
console.log(arr);
arr.push("omi");
console.log(arr);
arr.shift();//works like pop but it pop first element
console.log(arr);
arr.unshift("A")//works like push but it push element in first index
console.log(arr);
console.log(arr.length);

//loop in array
let a=[2,4,6,8,10]
console.log("Array elements: ");
for(let index=0;index<a.length;index++){
    const element=a[index];
    console.log(element);
}
let newArr=[];
for(let index=0;index<a.length;index++){
    const element=a[index];
    newArr.push(element**2);
}
console.log("New Array: ",newArr)

//map function
let mapArr = a.map((e)=>{
    return e**2
})
console.log(mapArr) //output is same as newArr

//filter
const greaterthantwo =(e)=>{
    if(e>2){
        return true
    }
    return false
}
console.log(a.filter(greaterthantwo))//it prints numbers from array which are greater that two

const red=(a,b)=>{
    return a*b;
}
console.log(a.reduce(red)) // it prints multiplication of all numbers from array without using loop on array index

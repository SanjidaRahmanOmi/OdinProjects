let a=20;
var b=15;

{
    let a = 25;
    var b = 30
    console.log("value of a in block for let:",a); // value will change only in the block 
    console.log("value of b in block for var:",b);
    // output: value of a in block for let: 25
    //value of b in block for var: 30
}
console.log("value of a outside block for let:",a);
console.log("value of b outside block for var:",b); // value will be changed after 2nd time declaration whether inside or outside the block.
//output: value of a outside block for let: 20
//value of b outside block for var: 30

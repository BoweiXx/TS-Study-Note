let num = 1;
// num = '1'; Note that this will cause error due to the wrong type assignment

let num2: number = undefined;
// num2 = '1'; Note that this will cause error due to the wrong type assignment

num = NaN; // no problem, NaN is number type!

//cause error? or be silent
num2 = 1;
let myString: string = 'hello';
let myString2: string = 'world';
// The following are throwing: Error: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
// let myResult = myString - num2; 
// let myResult = myString * num2;
// let myResult = myString / num2;
// let myResult = myString % num2;

// same error, but also on RHS
// let myResult = myString * myString2;
// let myResult = myString - myString2;
// let myResult = myString / myString2;
// let myResult = myString % myString2;


let myBool: boolean = true;
// myBool = 1; Error: Type 'number' is not assignable to type 'boolean'.
// let myResult = myBool + num2  Error: Operator '+' cannot be applied to types 'boolean' and 'number'.
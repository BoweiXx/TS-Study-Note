# TS Basic Types

In many cases, we assign a type to a variable with ```:TypeAnnotation``` syntax, for example, to declare a variable ```myNumber``` and assign ```number``` type to it, we can say: 
```typescript
let myNumber: number
```
Once the type is assigned, you can only assign values according to the specified type, otherwise transpiler will give error:

```typescript
myNumber = '1' // Error: Type 'string' is not assignable to type 'number'
```
Also, TypeScript can infer the type base on the value that is assigned to the variable: 
```typescript
let myNumber = 1 // this is infers that the type of myNumber is number
myNumber = '1' // Error: Type 'string' is not assignable to type 'number'
```
With the brief introduction of how to assign a type to a variable, we can start look at what types does TS have.

##  Primitives
As we all know, JavaScript has the following primitive types: 
- ```number```
- ```string```
- ```boolean```
- ```undefined```
- ```null```
- ```symbol```
- ```bigint```

As expectation, TypeScript has the corresponding types. But the most basic and frequently used types are the first 3 in the list. I will introduce ```undefined``` and ```null``` later in this chapter, and ```symbol``` in the upcoming [advanced type](../advanced_Type/advanced_type.md). Now let's look at the three 'everyday types', I think they are pretty intuitive, so I am going to just introduce some part I think might be tricky or interesting to you. 

### ```number``` and ```NaN```
```NaN```, aka Not a Number, is the least favorable thing for me while debugging. I did two tests on ```NaN```: first, to see if a variable with ```number``` type can be assigned with value of ```NaN```: 
```typescript
let num = 1;
num = NaN; // no problem, NaN is number type!
```
Well, this is expected, as in JavaScript:
```javascript
console.log(typeof NaN) //number
```
Then I start to think, if NaN can pass the test, does TypeScript have some mechanism to prevent it from happening? So I tried some arithmetic operations between ```string``` and ```number```: 

```typescript
let num2: number = 1;
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
```
Well, it does. It seems like unless you assign ```NaN``` to a variable explicitly, the problem of ```NaN``` will be detected beforehand.

### ```string``` and ```boolean```

I did several other tests on TS. This is because in JS, while doing arithmetic operations on ```boolean``` and ```number```, ```true``` and ```false``` are often evalated as 1 and 0, respectively. The [try](./basics.ts) shows that this type of operation is not allowed in TS.

## Enumerates
Suppose we have a simulation of the Earth, and we need to declare variables for the four seasons. We can declare the seasons like this: 
```javascript
let seasons ={
    spring:'SPRING',
    summer:'SUMMER',
    fall:'FALL',
    winter:'WINTER';
} 
function seasonSelector(seasons){
    do select(seasons);
}
```
In this case, I can change what is in the ```seasons``` object, and the function might throw an error, or select something that is unexpected. In this case, we need some additional checks to make sure this snippet runs as we expect. Now we have TS, and it provides a type: ```enum``` for this situation, where you wish to have a set of finite possible values belong to a group. There are two ways to define an ```enum```: 
- By number: 
```typescript
enum Seasons{
    Spring,         //by default, the numeric value for Spring is 0, but you can specify its value, like: 
    //Spring = 1,   //In this case, Spring starts with 1           
    Summer,         //=1 by default, 2 if Spring = 1
    Fall,           //=2 by default, 3 if Spring = 1
    Winter          //=3 by default, 4 if Spring = 1
}
```
Suppose we are using the default setting, we can retrieve the position of the season: 
```typescript
let springNum: number = Seasons.Spring
console.log(springNum) // 0
```
Or we can provide its position number and get a string: 
```typescript
let springSeason: string = Seasons[0]
console.log(springSeason) //'Spring'
```

- By String

In our example, providing numerical values  might not be very helpful. We probably want to retrieve from ```Seasons.Spring``` and get a string of ```'SPRING'```. In this case, we can assign string values on the members of ```Seasons```. Note that when using string, we need to declare every values explicitly.

```typescript
enum Seasons{
    Spring = 'SPRING',      
    Summer = 'SUMMER',    
    Fall = 'FALL',        
    Winter = 'WINTER'        
}
let springSeason: string = Seasons.Spring
console.log(springSeason) // 'SPRING'
```
### Array and Tuple

- Array

We can declare a Array type with ```[]``` suffix. For example, if we want to declare a array of booleans, we can say: 
```typescript
let boolArray: boolean[] 
boolArray = [true, false] //ok
boolArray = ['true', false] //type error
```

- Tuple

TypeScript also support tuple. Tuple is a structure with fixed length and predetermined sequence of types of elements. To declare a tuple, follow the format: 
```typescript
let myTuple: [number, string, boolean]
myTuple = [1, 'hello', true] //ok
myTuple = [2, 3, false] //error
myTuple = [1. 'hello'] //error, note that the length should also match
```

## Special Types
TS provides additional types: 
- ```any```

The situation of using ```any```, as far as I understand it, is where static type check is not applicable. Say, if we are using a 3rd party service, or making an HTTP request, and they are using ```any``` for the result, or I have no idea what the result would be. But there is a better type ```unknown``` for it, and we will introduce it later.

Another case I can think of is when our function can nicely do its work to all the types. In this case, I do not think any wrong with using any. 

But, I think it is a good approach to avoid abuse of ```any```, like we avoid using ```eval()``` and ```exec()```; for they adding uncertainty to our code.

- ```void```

Sometimes, your function is not going to return any value, in this case, you can assign return type to ```void```. Although a variable with type ```void``` can be assigned with value ```undefined``` and ```null```, I find this case is meaningless and trivial. So a good practice is to only use ```void``` when your function not returning anything. 

- ```null``` (not frequently used)
- ```undefined``` (not frequently used)

To continue reading, please jump to the [Compiler Options](../tsconfig/tsconfig.md), or you can jump to [Advanced Types](../advanced_Type/advanced_type.md)

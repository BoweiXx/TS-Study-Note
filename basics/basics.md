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
With the brief introduction of how to use the type system of TS, we can start look at what types does TS have.

##  Primitives




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

TypeScript also support tuple. To declare a tuple, follow the format: 
```typescript
let myTuple: [number, string, boolean]
myTuple = [1, 'hello', true] //ok
myTuple = [2, 3, false] //error
myTuple = [1. 'hello'] //error, note that the length should also match
```

## Special Types
TS provides additional types: 
- ```Any```


- ```Void```
- ```Null``` (not frequently used)
- ```Undefined``` (not frequently used)
## Function

To continue reading, please jump to the [Compiler Options](../tsconfig/tsconfig.md), or you can jump to [Advanced Types](../advanced_Type/advanced_type.md)

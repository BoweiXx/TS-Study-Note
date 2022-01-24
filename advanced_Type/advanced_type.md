# Type from Types
In this part, we are going to learn how to create types from the primitive types. After learning this part, we are able to:
- Create complex types 
- Assign aliases to our types for reuse


## Type Aliases
There are cases that complex types are used several times in our code. In this case, we probably want to choose use an alias for each of them. For example, in JavaScript, when an object is used several times, naturally we assign a variable name to it: 
```typescript
const myObj = {
    el1: 'el1',
    el2: 2
}
```
Same for TS, when a type is frequently used, we can assign an alias to it, so we could easily reuse it after the declaration. The syntax for it is ```type NAME = typeName```. For example, to assign an alias to ```numebr``` type(just for the purpose of showing an example): 
```typescript
type myNum = number
```
After learning the types we are about to introduce, we could use the aliases for those types to make our code more readible. 

## Function
A function takes n (n >= 0) parameters and produce a result. (In JS, even if there is no ```return``` keyword, a function will return ```undefined```) Base on this, we can say, by defining the types of parameters and return value, we can define a function type. The most basic way of defining a function with type is specifying types of its parameters and return value.
```typescript
function funcWithType(param1: string): void{
    //do stuff but no return
}
```
The part in the parentheses is pretty straight forward, this function takes one parameter that has ```number``` type. Then, the ```:void``` specifies that this function does not return anything.

You can do this on callbacks, say we have a function that takes callbacks with a specific type, we could do: 
```typescript
function cbTaker(cb: (param: string)=> void){
    cb('blah');
}
function gibber(param: string){
    console.log(param);
}

cbTaker(gibber) //'blah'
```




## Objects



## Class




## Interface


## Generic Type


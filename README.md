# Typescript Note

This repo contains study notes of [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). To read this repo, a basic understanding of JS is required.

## Why this Repo? 
A practice of writing documentation, also good to have notes on the Internet while learning. (I usually use my paper-based notebook)
## Table of Contents 
- [TS in a nutshell](./nutshell/overview.md)
- [TS Configuration](./tsconfig/tsconfig.md)
- [Basic Types](./basics/basics.md)
- [Advance Types](./advanced_Type/advanced_type.md)
- [Class, Interface and More on Function](./advanced_type2/advanced_type2.md)
- [.d.ts File](./dts/dts.md)

## Recap of JS

This part is going to recap some key concepts of JS. Feel free to dive into TS part if you are farmiliar with them. 

- Default parameter values
- Rest Parameters and Spread Syntax (...)
- Prototype, class, and ```extend()```

The reason for this is they will start to appear in the example codes. Understanding what does those means will facilitate the understanding of the articles. Let's start to talk about the default parameter values, rest parameters and spread syntax, as they often appear in function declarations. 

### Default Parameter Values

We often do some vavlidation to prevent errors happening during runtime, for example, to write a robust ```add()``` function, we probably will say: 
```javascript
function add(param1, param2){
    if(param2 === undefined) param2 = 0; 
    return param1 + param2; 
}
```
But with default parameter, things will get much easier: 
```javascript
function add(param1 = 0, param2 = 0){
    return param1 + param2;
}
```

### Rest Parameter and Spread Syntax

The rest parameter and spread syntax looks exactly the same (```...```). But they mean different operations. Let's look at the spread syntax first, as I found it is used in more cases.

- Spread Syntax

Spread syntax can be used to expand iterables, like arrays, string, map, set, etc. We can use it to deep copy arrays that only have one layer: 
```javascript
const original = [1, 2, 3, 4, 5]
const copy = [...original]
console.log(copy) // [1, 2, 3, 4, 5]
```
Note that with more layers of arrays, the inner ones are pointers, so spread syntax is not a ideal way to do deep copy. If needed, we could use for loop or JSON.stringify and JSON.parse to copy the array. 

But rest parameter can be used to simplify the code, for example, we can use this syntax to array-like data structures, for example, the ```arguments``` of a function, or node list of the DOM tree. 
```javascript
const nodeList = document.querySelectorAll('li')
const nodeArray = [...nodeList]
```

Lastly, a frequent usage of spread syntax is to replace the ```.apply``` when using an array as parameter of a function: 
```javascript
function sum(a, b, c){

    return a + b + c
}
const param = [1, 2, 3]
//using apply: 
sum.apply(null, param) // 6

//use spread syntax: 
sum(...param) // 6
```
 
- Rest Parameter

Rest parameter is used to collect variables and form an array, with this in mind, if we have a function that takes a number of parameters that we cannot be sure, we could use ```...``` in function declaration, instead of using ```arguments```: 
```javascript
function sum(...vals){
    console.log(vals)
    let res = 0
    for(let val of vals){
        res += val
    }
    return res
}
let myRes = sum(1, 2, 4) // [1, 2, 4]
console.log(myRes) // 7
```
Note that the rest parameter can only be used as the last parameter, otherwise compiler will print error

```javascript
function wrong(a, ...b, c){ // Error
    //...
}
```

### Prototype and Class

For prototype, please refer to this [blog](https://www.boweixu.com/post/prototype-__proto__-and-constructor-in-js)

For class, please refer to this [blog](https://www.boweixu.com/post/class-in-js-basics)

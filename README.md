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


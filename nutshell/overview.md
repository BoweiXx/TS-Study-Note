# TS in a Nutshell

## Why learning TS? 
For me, working on a project which has a lot of variables passing around is confusing. Sometimes I just forgot what is in the object or the array, and I need to spend time revisit my code. When working others, this problem gets worse. You might find this kind of notation is not very intuitive:
```JavaScript
//find desired elements in an object and return them in an array
function extractSomeElement(elements){
    do element = extract(elements);
    return element;
}
```
By this you have no idea what is in the elements variable, so you have to go back and look it up. Also, if you pass in some unexpected values during runtime, without proper checking, the code will either has unexpected behavior, or throw errors. It will be nice if there is a pre-defined structure, that you can use it as a reference not only for readibility, but also error checking, and therefore we use TS.

## What is TS? 
To the best of my knowledge, TS is analogues to JavaScript with type checking. You can write the code in TS with all the features of JS, and use transpiler to convert your code to JS when you are done. 

## How to Use TS? 

### Installation
- Via npm:
```bash
$ npm install typescript --save-dev
```
- Via yarn: 
```bash
$ yarn add typescript --dev
```
### Configuration
- In tsconfig.json, you can specify what version, module type, etc. A typical tsconfig.json file looks like this: 
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "sourceMap": true
  }
}
```
This basically is saying,  we are using ES6, commonJS modules (most likely in node), and source map. 
### Usage
- Use typescript compiler:
```bash
$ tsc your_file.ts
```

- Compile and run

Windows: 
```bash
$ tsc your_file.ts | node your_file.js
```

Linux: 
```bash
$ tsc your_file.ts && node your_file.js
```

Or, you can use [ts-node](https://www.npmjs.com/package/ts-node)
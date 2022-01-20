# TS Basics

## Types 
In many cases, we declare types with ```:TypeAnnotation```, for example, to declare variable ```myNumber``` with number type and value of 1, we can say: 
```typescript
let myNumber: number = 1;
```
###  Primitive Types
TypeScript is a superset of JavaSript, thus they share some primitive types: 
- Number
- String
- Boolean

Two primitive types are excluded: 
- Symbol
- Bigint

### Enumerates

### Array and Tuple

### Interface

### Generic Types
### Special Types
TS provides additional types: 
- Any
- Null (not frequently used)
- Undefined (not frequently used)
- Void

## Type Variant

## Complier Options
Compiler options in ```tsconfig.json``` provides a way to configure your transpiler, and for those who are learning, I think it is the place where you can know what can we do with TS thoroughly. Here is a list of possible options for compiler, we do not need to recite this, but reading through this provides a clear scope of what TS can do: 
```json
{
  "compilerOptions": {

    /* Basics */
    "target": "es5",                       // Sepecifiy ECMAScript Version:'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // Specify module: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // Specify libraries in compilation
    "allowJs": true,                       // Allow to compile JS?
    "checkJs": true,                       // Allow to check errors in JS?
    "jsx": "preserve",                     // Specify .jsx file: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // Generate declarartion file (*.d.ts)
    "sourceMap": true,                     // Generate source map (*.map)
    "outFile": "./",                       // Merge the output file into 1 file
    "outDir": "./",                        // Designate output directory
    "rootDir": "./",                       // Control the directory structure --outDir.
    "removeComments": true,                // Remove all the comments after transpile
    "noEmit": true,                        // Do not emit compiler output files
    "importHelpers": true,                 // Import helper functions
    "isolatedModules": true,               // Modulize every single file

    /* Strict Type Check */
    "strict": true,                        // Enable all the strict options? 
    "noImplicitAny": true,                 // Error if implicit any type
    "strictNullChecks": true,              // Enable strict null check
    "noImplicitThis": true,                // generate error when this is any type
    "alwaysStrict": true,                  // Inject 'use strict' to every file, and check modules under strict mode

    /* Additional Checks */
    "noUnusedLocals": true,                // Error when unused variables
    "noUnusedParameters": true,            // Error when unused parameters
    "noImplicitReturns": true,             // Error when at least one function without return value
    "noFallthroughCasesInSwitch": true,    // Error when fallthrough cases (make sure every case followed by break or return)

    /* Module Options */
    "moduleResolution": "node",            // Module resolve mode： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // BaseUrl 
    "paths": {},                           // Pathes of modules
    "rootDirs": [],                        // Root directory list
    "typeRoots": [],                       // Directory list which contains type specification
    "allowSyntheticDefaultImports": true,  // Allow default import

    /* Source Map Options */
    "inlineSourceMap": true,               // Generate single source map

    /* Other Options */
    "experimentalDecorators": true,        // Enable Decorator
    "emitDecoratorMetadata": true          // Provide metadata for decorator
  }
}
```
[reference](https://jkchao.github.io/typescript-book-chinese/project/compilationContext.html#%E5%9F%BA%E7%A1%80) 

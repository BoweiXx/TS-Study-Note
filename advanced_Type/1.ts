//enumerate
//in this case, the Pen, Pencil etc, are assigned to 0, 1, ...
enum myStuff{
    Pen, 
    Pencil, 
    Raspi,
    Tea
}
let mySingleStuff: string = myStuff[2];
console.log(mySingleStuff)
//we can also specify the start number, like:
enum myStuff2{
    Pen = 3,
    Pencil, 
    Raspi,
    Tea
}
//Hence the Pen is 3, Pencil is 4, ...
//Also we can assign string values to the enumerates, but we need to specify for every element
enum myStuff3{
    Pen = 'PEN',
    Pencil = 'PENCIL',
    Raspi = 'RASPI',
    Tea = 'TEA'
}
//Object
type myself = {
    name: string,
    age: number,
    website: string
}
//Type Aliases


// //Function


//Generic


//Geenric Function
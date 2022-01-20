//enumerate
//in this case, the Pen, Pencil etc, are assigned to 0, 1, ...
var myStuff;
(function (myStuff) {
    myStuff[myStuff["Pen"] = 0] = "Pen";
    myStuff[myStuff["Pencil"] = 1] = "Pencil";
    myStuff[myStuff["Raspi"] = 2] = "Raspi";
    myStuff[myStuff["Tea"] = 3] = "Tea";
})(myStuff || (myStuff = {}));
var mySingleStuff = myStuff.Pen;
console.log(mySingleStuff);
//we can also specify the start number, like:
var myStuff2;
(function (myStuff2) {
    myStuff2[myStuff2["Pen"] = 3] = "Pen";
    myStuff2[myStuff2["Pencil"] = 4] = "Pencil";
    myStuff2[myStuff2["Raspi"] = 5] = "Raspi";
    myStuff2[myStuff2["Tea"] = 6] = "Tea";
})(myStuff2 || (myStuff2 = {}));
//Hence the Pen is 3, Pencil is 4, ...
//Also we can assign string values to the enumerates, but we need to specify for every element
var myStuff3;
(function (myStuff3) {
    myStuff3["Pen"] = "PEN";
    myStuff3["Pencil"] = "PENCIL";
    myStuff3["Raspi"] = "RASPI";
    myStuff3["Tea"] = "TEA";
})(myStuff3 || (myStuff3 = {}));
//Type Aliases
// //Function
//Generic
//Geenric Function

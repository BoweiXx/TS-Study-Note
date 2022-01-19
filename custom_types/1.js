var myStuff;
(function (myStuff) {
    myStuff[myStuff["Pen"] = 0] = "Pen";
    myStuff[myStuff["Pencil"] = 1] = "Pencil";
    myStuff[myStuff["Raspi"] = 2] = "Raspi";
    myStuff[myStuff["Tea"] = 3] = "Tea";
})(myStuff || (myStuff = {}));
var mySingleStuff = myStuff.Pen;
console.log(myStuff)
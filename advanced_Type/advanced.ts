//simple function type declaration
function cbTaker(cb: (param: string)=> void){
    cb('blah');
}
function gibber(param: string){
    console.log(param);
}

cbTaker(gibber)


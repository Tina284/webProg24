function zbroj(a, b){
    let c = a+b;
    //console.log(c);
    return c;
}

//streličasta (arrow)
const zbroj2 = (a,b) => {
    let c = a+b;
    //console.log(c);
    return c;
}

let suma = zbroj(5,7);
let sumaStr = zbroj2(5,7);
console.log(sumaStr);
let x = 2;
let y = 3;
let suma2 = zbroj(x,y);

//unaprijed zadani
function zbrojZadan(a,b=10) {
    let loc = 50;
    console.log("Unutar funkcije:", loc)
    return a+b;
}
//console.log("Van funkcije:", loc)
let zbrZ = zbrojZadan(2);
console.log(zbrZ);
let zbrZ2 = zbrojZadan(2,3);
console.log(zbrZ2);

//rest parametar
function zbrojRest(...args) {
    let zbroj = 0;
    for (let arg of args) zbroj+=arg;
    return zbroj;
} 

let restZ = zbrojRest(3,6,432,765,213,5);
console.log(restZ);

/*Napraviti funkciju umnozak(lista) koja prima
listu brojeva i vraća umnozak elemenata liste*/

function umnozak(lista){
    let umn = 1
    for (let el of lista) umn *= el;
    console.log(umn);
}

const lista = [2, 3, 6, 8]
umnozak(lista)
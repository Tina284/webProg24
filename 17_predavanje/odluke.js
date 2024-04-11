//IF
var a = 10;

if (a > 8) {
    console.log("a je veći od 8.")
}

if (a < 8) {
    console.log("a je manji od 8.")
}
console.log("Nastavak zadatka.")

//IF - ELSE
var godine = 18;
if (godine < 18){
    console.log("Osoba je maloljetna.")
} else {
    console.log("Osoba je punoljetna.")
}

//NESTED IF
var x = 5;
var y = 3;
if (x > 10) {
    if (y > 6) {
        console.log("x je veći od 10 i y je veći od 6.")
    }
    console.log("x je veći od 10 ali y nije veći od 6.")
} else {
    console.log("x nije veći od 10")
}

//IF-ELSE IF-ELSE
// 0-17 maloljetnici, 18-65 odrasle osobe, 65-100 umirovljenici
var dob = 15;
if (dob < 18) {
    console.log("osoba je maloljetna.")
} else if (dob < 66) {
    console.log("osoba je odrasla.")
} else if (dob < 101) {
    console.log("osoba je umirovljenik.")
} 

const osobaA = {
    "ime": "Ana",
    "prezime": "Anić",
    "godine": 30,
    "grad" : "Zagreb",
    "zaposlena": true,
    "hobiji": ["čitanje", "planinarenje", "ples"]
}

console.log(osobaA);
console.log("Grad", osobaA.grad);

osobaA.oib = "58964252215";
console.log("oib", osobaA.oib);

const jsonString = JSON.stringify(osobaA);
console.log(jsonString);


const jsonObjekt = JSON.parse(jsonString);
console.log(jsonObjekt);
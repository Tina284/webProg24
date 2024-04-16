class Pravokutnik{
    constructor (visina, sirina) {
        this.visina = visina;
        this.sirina = sirina;
    }

    getPovrsina() {
        return this.visina * this.sirina;
    }
}

var objektPravokutnik = new Pravokutnik(10, 20);
console.log(objektPravokutnik.getPovrsina());
console.log(objektPravokutnik.sirina);
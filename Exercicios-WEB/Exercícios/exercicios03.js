function Soma(base, exp) {
    this.calc = function() {
        console.log(Math.pow(base, exp))
    }
}

const v1 = new Soma(3, 2)
v1.calc()
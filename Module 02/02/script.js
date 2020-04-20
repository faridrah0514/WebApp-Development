// console.log("hello world")

class Car {
    constructor(brand){
        this.carname = brand
    }

    namaMobil() {
        console.log("ini nama mobil", this.carname)
    }

    static cobaDulu(value){
        this.coba = value
    }

    printCobaDulu(){
        console.log("ini coba", this.coba)
    }
}

var message = "pesan ini adalah pesan berantai"
console.log(message.split('').reverse().join(''))
console.log(Date.now())
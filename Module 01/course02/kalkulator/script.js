const hasil3 = document.getElementById("hasil3")

function myFunction(number) {
    const angka = number
    var hasil2 = document.getElementById("hasil2")
    // const bil1 = document.getElementById("bil1")
    var hasil3 = document.getElementById("hasil3")
    if (hasil2.innerHTML == 0){
        hasil2.innerHTML = angka
    } else{
        hasil2.innerHTML += angka
    }
    hasil3.innerHTML += angka
    console.log(hasil2.innerHTML)
}

function myFunctionHitung(operator){
    var hasil2 = document.getElementById("hasil2")
    var op = document.getElementById("operator")
    var bil1 = document.getElementById('bil1')
    var bil2 = document.getElementById("bil2")
    var hasil3 = document.getElementById("hasil3")
    if (! bil1.innerHTML) {
        bil1.innerHTML = hasil2.innerHTML
        op.innerHTML = operator
        
    } else {
        bil2.innerHTML = hasil2.innerHTML
    }
    
    if (bil1.innerHTML && bil2.innerHTML){
        hasil2.innerHTML = tungitung(bil1, bil2, op)
        bil1.innerHTML = hasil2.innerHTML
        bil2.innerHTML =""
    }
    hasil2.innerHTML = '0'
    hasil3.innerHTML+=operator
}


function myFunctionResult(){
    const bil1 = document.getElementById("bil1")
    const operator = document.getElementById("operator")
    const bil2 = document.getElementById("bil2")
    const hasil2 = document.getElementById("hasil2")
    var hasil3 = document.getElementById("hasil3")

    if (hasil2.innerHTML != 0){
        bil2.innerHTML = hasil2.innerHTML
    }
    if (bil1.innerHTML && operator.innerHTML && bil2.innerHTML){
        hasil2.innerHTML = tungitung(bil1,bil2, operator)
        hasil3.innerHTML = hasil2.innerHTML
        bil1.innerHTML =""
        operator.innerHTML=""
        bil2.innerHTML=""
    }
    console.log("hasilnya adalah "+hasil2.innerHTML)
}

function tungitung(bil1, bil2, operator){
    var hasil
    switch (operator.innerHTML){
        case "+":
            hasil = parseFloat(bil1.innerHTML) + parseInt(bil2.innerHTML)
            break
        case "x":
            hasil = parseFloat(bil1.innerHTML) * parseInt(bil2.innerHTML)
            break 
        case "-":
            hasil = parseFloat(bil1.innerHTML) - parseInt(bil2.innerHTML)
            break
        case "/":
            hasil = parseFloat(bil1.innerHTML) / parseInt(bil2.innerHTML)
            break          
    }
    return hasil
}

function myFunctionClear(){
    document.getElementById("hasil2").innerHTML = '0'
    document.getElementById("bil1").innerHTML =""
    document.getElementById("operator").innerHTML =""
    document.getElementById("bil2").innerHTML =""
    document.getElementById("hasil3").innerHTML = ""
}
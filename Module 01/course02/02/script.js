function getAttributes(){
    var x = document.getElementById("w3r")
    var attr = ['id', 'type', 'hreflong', 'rel', 'target', 'href']
    for (index in attr){
        console.log(x[attr[index]])
    }
}

function insert_Row() {
    var content = document.getElementById("sampleTable")
    console.log(content)
    console.log(content['rows']['length'])
    var insertRow = content.insertRow(content['rows']['length'])
    insertRow.insertCell(0).innerHTML = "new cell"
    insertRow.insertCell(1).innerHTML = "new cell2"
    
}


function changeContent(){
    var x = document.getElementById("myTable")
    console.log(x)
    console.log(x.rows)

    do {
        var row_num = parseInt(prompt("masukkan baris (0,1,2)"))
        var cell_num = parseInt(prompt("masukkan cell number (0,1)"))
        var content = prompt("isi kontennya ya")
    } while (row_num < 0 || row_num > 2 || cell_num < 0 || cell_num > 1)
    console.log("row number "+row_num+" cell number "+cell_num)
    x['rows'][row_num]['cells'][cell_num].innerHTML = content
    
}

const c = document.createElement("div")
// console.log(c)
// c.dir
// c.innerHTML("halo apa kabar")
// console.log(typeof c)
// c['innerText'] = "coba dulu"
// c['innerHTML'] = "coba aja"
// document.app
// c.append(document)
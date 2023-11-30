    const data = document.querySelector("#range").value
    document.querySelector("#progressbar").value = data

    let a = 100
    let b = 0
    for( let i=0; i < 5; i++){
        b += i
    }

    console.log(b)
    a++
    console.log(a)


    let contador = 0
    function suma(){
        contador++
        document.querySelector(".contador").innerHTML.value
    }
    function resta(){
        contador--
        document.querySelector(".contador").innerHTML.value
    }
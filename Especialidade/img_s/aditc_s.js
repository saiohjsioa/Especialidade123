
function somar() {
    var numb1 = document.querySelector('input#numero1')
    var numb2 = document.querySelector('input#numero2')
    var primeiro = Number(numb1.value)
    var segundo = Number(numb2.value)
    const calcular = primeiro + segundo
    resposta.innerHTML = `o resultado foi: ${calcular}`
}


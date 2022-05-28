function calcular(){
    var msg = window.document.getElementById('msg')
    var ano = window.document.getElementById('ano')
    var idade = window.document.getElementById('ida')
    var data = new Date()
    var anos= data.getFullYear()
    if (Number(ano.value) <  2022){
        window.alert('Dados incorretos , Lembre-se o ano deve ser no mínimo 2022!')
    }
    var anonasc = anos - Number(idade.value)
    var res = Number(ano.value) - anonasc
    msg.innerHTML = `Você Terá ${res} anos`
}
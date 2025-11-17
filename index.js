'use strict'

async function pesquisarCep (cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = response.json()
    return data
}

async function preencherCampos( {target} ) {
    const infoCep = await pesquisarCep(target.value)
    document.getElementById('endereco').value = infoCep.logradouro
    document.getElementById('bairro').value = infoCep.bairro
    document.getElementById('cidade').value = infoCep.localidade
    document.getElementById('estado').value = infoCep.uf
}


//Ao sair do campo ele chama a função "preencherCampos"
//focusout -> É o evento que acontece quando você sai do campo
document.getElementById('cep').addEventListener('focusout', preencherCampos)
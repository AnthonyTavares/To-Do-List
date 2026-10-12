lista = []

function adicionar() {
    let valor = document.getElementById("ipt")
    let tarefa = valor.value
    let secao = document.getElementById("secao")
    let ul = document.getElementById("lista")
    let li = document.createElement("li")
    let espaco = document.createElement("div")
    let edit = document.createElement("button")
    let reset = document.createElement("button")

    if (tarefa === "") {
        alert("Por favor, digite uma tarefa!")
    } else {
        lista.push(tarefa)

        let posicao = lista.indexOf(tarefa)

        espaco.id = "espaco"

        li.textContent = tarefa

        edit.textContent = "Editar"
        edit.id = "editar"

        edit.onclick = function() {
            let editTask = prompt("Qual é sua Nova Tarefa?")

            if (editTask === null) {
                return
            }

            while (editTask === "") {
                alert("A tarefa não pode ficar em branco!")
                editTask = prompt("Qual é sua Nova Tarefa?")

                if (editTask === null) {
                    return
                }
            }

            lista[posicao] = editTask
            li.textContent = editTask
        }

        reset.textContent = "Apagar"
        reset.id = "apagar"

        reset.onclick = function() {
            let confirmacao = confirm("Tem certeza que quer apagar esta tarefa?")

            if (confirmacao === true) {
                let posicao = lista.indexOf(tarefa)
                lista.splice(posicao, 1)
                li.remove()
                espaco.remove()
            }
            if(lista.length === 0){
            secao.style.display = "none"
        }  
    }
        espaco.appendChild(edit)
        espaco.appendChild(reset)

        ul.appendChild(li)
        li.after(espaco)

        secao.style.display = "block"
        valor.value = ""
    }
}
class Cliente {
    constructor(){
        this.clientes = localStorage.getItem('tbClientes') === null
                        ? []
                        : JSON.parse(localStorage.getItem('tbClientes'))
    }
    salva(cliente){
        this.clientes.push(cliente) //adiciona um novo elemento ao array
        alert('Novo cliente salvo com sucesso!')
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
    }
    lista(){
        const listagem = this.clientes.map((cliente) => (
            `<tr>
                <td>${cliente.nome}</td>    
                <td>${cliente.sobrenome}</td>
                <td>${cliente.celular}</td>       
                <td>${cliente.endereco}</td>
                <td>${cliente.bairro}</td>    
                <td>${cliente.cidade}</td>
                <td>${cliente.observacoes}</td>
                <td> </td>
             </tr>
            `
        ))
        return(`<table border='1' class='paleBlueRows'>
        <caption>Relação de Clientes Cadastrados:</caption>
        <thead>
            <th>nome</th>      
            <th>sobrenome</th>
            <th>celular</th>         
            <th>endereço</th>
            <th>Bairro</th>      
            <th>Cidade</th>
            <th>Observações</th> 
        </thead>
        <tbody>${listagem}</tbody>
        </table>    
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
}
//instanciamos um novo objeto
const cliente = new Cliente()
//tratamos o botão salvar
document.getElementById('salvar').onclick = function(){
    const registro = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        celular: document.getElementById('celular').value,
        endereco:document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        observacoes: document.getElementById('observacoes').value
    }
    cliente.salva(registro)
}
//tratamos a listagem
window.onload = function() {
    cliente.atualiza()
}
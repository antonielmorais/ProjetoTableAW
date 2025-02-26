// Função para carregar dados do sessionStorage e exibir na tabela
function loadTableData() {
    const tableBody = document.querySelector("#table-body");
    let data = JSON.parse(sessionStorage.getItem("data")) || [];

    // Adicionar 10 registros iniciais se a tabela estiver vazia
    if (data.length === 0) {
        data = [
            { nome: "João", email: "joao@mail.com", telefone: "1234567890", endereco: "Rua 1, 123" },
            { nome: "Maria", email: "maria@mail.com", telefone: "1234567891", endereco: "Rua 2, 234" },
            { nome: "Carlos", email: "carlos@mail.com", telefone: "1234567892", endereco: "Rua 3, 345" },
            { nome: "Ana", email: "ana@mail.com", telefone: "1234567893", endereco: "Rua 4, 456" },
            { nome: "Pedro", email: "pedro@mail.com", telefone: "1234567894", endereco: "Rua 5, 567" },
            { nome: "Lucas", email: "lucas@mail.com", telefone: "1234567895", endereco: "Rua 6, 678" },
            { nome: "Julia", email: "julia@mail.com", telefone: "1234567896", endereco: "Rua 7, 789" },
            { nome: "Rafael", email: "rafael@mail.com", telefone: "1234567897", endereco: "Rua 8, 890" },
            { nome: "Lúcia", email: "lucia@mail.com", telefone: "1234567898", endereco: "Rua 9, 901" },
            { nome: "Ricardo", email: "ricardo@mail.com", telefone: "1234567899", endereco: "Rua 10, 101" }
        ];
        sessionStorage.setItem("data", JSON.stringify(data));
    }

    tableBody.innerHTML = "";
    data.forEach((registro) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${registro.nome}</td>
            <td>${registro.email}</td>
            <td>${registro.telefone}</td>
            <td>${registro.endereco}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Função para gravar dados do formulário
document.querySelector("#formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const telefone = document.querySelector("#telefone").value;
    const endereco = document.querySelector("#endereco").value;

    let data = JSON.parse(sessionStorage.getItem("data")) || [];
    data.push({ nome, email, telefone, endereco });
    sessionStorage.setItem("data", JSON.stringify(data));

    loadTableData(); // Atualiza a tabela após o cadastro
});

// Função para ordenar a tabela
function sortTable(colIndex) {
    const tableBody = document.querySelector("#table-body");
    let data = JSON.parse(sessionStorage.getItem("data")) || [];

    data.sort((a, b) => {
        const aText = Object.values(a)[colIndex].toLowerCase();
        const bText = Object.values(b)[colIndex].toLowerCase();
        return aText.localeCompare(bText);
    });

    sessionStorage.setItem("data", JSON.stringify(data));
    loadTableData(); // Recarrega os dados após a ordenação
}

// Carregar dados ao carregar a página
window.addEventListener("DOMContentLoaded", loadTableData);
<!-- Adicione isso antes do fechamento da tag </body> -->
    <script>
        function adicionarTabela() {
            var sectionProdutos = document.getElementById("produtos");

            var tabela = document.createElement("table");
            tabela.border = "1";

            var cabecalho = tabela.createTHead();
            var cabecalhoRow = cabecalho.insertRow();
            var th1 = document.createElement("th");
            th1.textContent = "Produto";
            var th2 = document.createElement("th");
            th2.textContent = "Preço";
            cabecalhoRow.appendChild(th1);
            cabecalhoRow.appendChild(th2);

            var corpo = tabela.createTBody();
            var row1 = corpo.insertRow();
            var cell1 = row1.insertCell();
            cell1.textContent = "Pote da Felicidade";
            var cell2 = row1.insertCell();
            cell2.textContent = "R$ 15,00";
            var cell3 = row1.insertCell();
            var link1 = document.createElement("a");
            link1.href = "pagina1.html";
            link1.textContent = "Ver Detalhes";
            cell3.appendChild(link1);

            var row2 = corpo.insertRow();
            var cell4 = row2.insertCell();
            cell4.textContent = "Brigadeiro";
            var cell5 = row2.insertCell();
            cell5.textContent = "R$ 10,00";
            var cell6 = row2.insertCell();
            var link2 = document.createElement("a");
            link2.href = "pagina2.html";
            link2.textContent = "Ver Detalhes";
            cell6.appendChild(link2);

            var row3 = corpo.insertRow();
            var cell7 = row3.insertCell();
            cell7.textContent = "Sobremesa da Felicidade";
            var cell8 = row3.insertCell();
            cell8.textContent = "R$ 20,00";
            var cell9 = row3.insertCell();
            var link3 = document.createElement("a");
            link3.href = "pagina3.html";
            link3.textContent = "Ver Detalhes";
            cell9.appendChild(link3);

            var row4 = corpo.insertRow();
            var cell10 = row4.insertCell();
            cell10.textContent = "Brigadeiro de Morango";
            var cell11 = row4.insertCell();
            cell11.textContent = "R$ 12,00";
            var cell12 = row4.insertCell();
            var link4 = document.createElement("a");
            link4.href = "pagina4.html";
            link4.textContent = "Ver Detalhes";
            cell12.appendChild(link4);

            sectionProdutos.appendChild(tabela);
        }
    </script>
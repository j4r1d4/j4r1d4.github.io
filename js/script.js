    const doces = [
        {
            id: 0,
            nome: 'Brigadeiro',
            img: 'brigadeiro.jpg',
            quantidade: 0,
            preco: 1.99
        },
        {
            id: 1,
            nome: 'Brigadeiro branco',
            img: 'brigadeirobranco.jpg',
            quantidade: 0,
            preco: 1.99
        },
        {
            id: 2,
            nome: 'Mesclado',
            img: 'mesclado.jpg',
            quantidade: 0,
            preco: 1.99
        },
        {
            id: 3,
            nome: 'Beijinho',
            img: 'beijinho.jpg',
            quantidade: 0,
            preco: 1.99
        },
        {
            id: 4,
            nome: 'Bicho de pé',
            img: 'bichodepe.jpg',
            quantidade: 0,
            preco: 1.99
        },
        {
            id: 5,
            nome: 'Romeu e Julieta',
            img: 'romeuejulieta.jpg',
            quantidade: 0,
            preco: 1.99
        },
        {
            id: 6,
            nome: 'Ninho com nutella',
            img: 'ninhocomnutella.jpg',
            quantidade: 0,
            preco: 1.99
        },
        {
            id: 7,
            nome: 'Churros',
            img: 'churros.jpg',
            quantidade: 0,
            preco: 1.99
        },
    ]

    inicializarLoja = () => {
        var containerProdutos = document.getElementById('produtos');
        doces.map((doce) => {
            containerProdutos.innerHTML += `
            <div class="card">
                <img src="images/`+ doce.img + `" alt="`+doce.nome+`" style="width:33,33%">
                <h1>`+ doce.nome + `</h1>
                <p class="price">R$ `+ doce.preco + `</p>
                <div class="number">
                    <button class="button-rounded" onclick="diminuirQtde(`+doce.id+`)"><i class="fa-solid fa-minus"></i></button>
                    <input id="doce_qtd_`+doce.id+`" disabled class="count" type="number" value="0" id="input" step="1" inputmode="numeric" pattern="\d*" min="0" max="999"/>
                    <button class="button-rounded" onclick="aumentarQtde(`+doce.id+`)"><i class="fa-solid fa-plus"></i></button>
                </div>
                <br/>
                <p><button id="add_cart_doce_`+doce.id+`" onclick="addDoceNoCarrinho(`+doce.id+`)" disabled class="button-pink"><i class="fa-sharp fa-solid fa-shop"></i> Add to Cart</button></p>
            </div>`;
            localStorage.setItem('doce_qtd_'+doce.id, 0)
            localStorage.setItem("doce_"+doce.id, 0)
        })
    }

    visualizarCarrinho = () => {
        var listaCarrinho = document.getElementById('lista_carrinho_doces');
        doces.map((doce, index) => {
            let doceQtde = localStorage.getItem('doce_qtd_'+doce.id)
            if (doceQtde != 'undefined' && doceQtde != null && parseInt(doceQtde) > 0) {
                listaCarrinho.innerHTML += `
                    <div class="row">
                        <div class="col">
                            <img src="images/`+ doce.img + `" alt="`+doce.nome+`" style="width:25%">
                        </div>
                        <div class="col">
                            <h4>`+ doce.nome + `</h4>
                        </div>
                        <div class="col">
                            <h4>`+ doceQtde + `</h4>
                        </div>
                        <div class="col">
                            <h4>R$ `+ parseInt(doceQtde) * doce.preco + `</h4>
                        </div>
                    </div>
                `
            }
            if(index == doces.size) {
                document.getElementById('none_item_add').remove();
            }
        })
    }

    aumentarQtde = (idDoce) => {
        let qtdeAtual = localStorage.getItem('doce_qtd_'+idDoce)
        document.getElementById("add_cart_doce_"+idDoce).disabled = false
        if (qtdeAtual === 'undefined') {
            localStorage.setItem('doce_qtd_'+idDoce, 1)
            document.getElementById("doce_qtd_"+idDoce).value = 1
        } else {
            qtdeAtual++
            localStorage.setItem('doce_qtd_'+idDoce, qtdeAtual)
            document.getElementById("doce_qtd_"+idDoce).value = qtdeAtual
        }
    }

    diminuirQtde = (idDoce) => {
        let qtdeAtual = localStorage.getItem('doce_qtd_'+idDoce)
        if (qtdeAtual > 0) {
            qtdeAtual--
            localStorage.setItem('doce_qtd_'+idDoce, qtdeAtual)
            document.getElementById("doce_qtd_"+idDoce).value = qtdeAtual
        } else if(qtdeAtual == 0){
            document.getElementById("add_cart_doce_"+idDoce).disabled = true
            localStorage.setItem('doce_qtd_'+idDoce, 0)
            document.getElementById("doce_qtd_"+idDoce).value = 0
        }
    }

    addDoceNoCarrinho = (idDoce) => {
        let qtdeItem = localStorage.getItem('doce_qtd_'+idDoce)
        localStorage.setItem("doce_"+idDoce, qtdeItem)
        let total = 0
        doces.map((doce) => {
            let item = localStorage.getItem("doce_"+doce.id)
            total += parseInt(item)
        })
        document.getElementById("carrinho_badge").innerHTML = total
    }

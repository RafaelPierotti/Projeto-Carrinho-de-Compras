let total;
clearCart();

function add(){
    let product = document.getElementById('product').value;
    let nameProcuct = product.split('-')[0];
    let valueProduct = product.split('R$')[1];
    let quantity = document.getElementById('quantity').value;  

    if (quantity <= 0){
         alert ('Insira um valor válido!')
    } else {
        let listProducts = document.getElementById('lista-produtos');
        listProducts.innerHTML = listProducts.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantity}x</span> ${nameProcuct} <span class="texto-azul">R$${totalPrice (valueProduct, quantity)}</span>
            </section>`;

        total += totalPrice(valueProduct, quantity);

        let totalCamp = document.getElementById('valor-total');
        totalCamp.textContent = `R$ ${total}`;

        document.getElementById('quantity').value = 0;
    }
}

function clearCart(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

function totalPrice (valueProduct, quantity){
    return valueProduct * quantity;
}


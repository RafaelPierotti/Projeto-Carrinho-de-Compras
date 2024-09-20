function add(){
    let product = document.getElementById('product').value;
    let nameProcuct = product.split('-')[0];
    let valueProduct = product.split('R$')[1];
    let quantity = document.getElementById('quantity').value;  

    let listProducts = document.getElementById('lista-produtos');
    listProducts.innerHTML = listProducts.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantity}x</span> ${nameProcuct} <span class="texto-azul">R$${totalPrice (valueProduct, quantity)}</span>
        </section>`;
}

function clean(){

}

function totalPrice (valueProduct, quantity){
    let price = valueProduct * quantity;

    return price;
}
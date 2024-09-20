function add(){
    let product = document.getElementById('product').value;
    let nameProcuct = product.split('-')[0];
    let valueProduct = product.split('R$')[1];

    let quantity = document.getElementById('quantity');

    alert(product);
    alert(quantity.value);
    alert(nameProcuct);
    alert(valueProduct);

    price(valueProduct, quantity);
}

function clean(){

}

function totalPrice (valueProduct, quantity){
    let price = valueProduct * quantity.value;

    alert(`Preço total R$ ${price}`);
}
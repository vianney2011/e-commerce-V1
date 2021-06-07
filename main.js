//Panier
let cart = document.querySelectorAll('.AddButton');

var produit=
    [
        {
           id: 1,
            name: "Shoes",
            country: "France",
            description: "une paire de chaussure",
            price: 100,
            available: "true",
            photo : "./image/shoes.jpg",
            add : 1,
            cart :0,
        },{   
            id: 2,
            name: "perfume",
            country: "AL",
            description: "pretty much the title",
            price: 50,
            available: "true",
            photo : "./image/perfume.jpg",
            add : 2,
            cart :0,
        },{   
            id: 3,
            name: "phone",
            country: "GR",
            description: "un iphone",
            price: 400,
            available: "true",
            photo : "./image/phone.jpg",
            add : 3,
            cart :0,
        },{   
            id: 4,
            name: "Scam diamond",
            country: "Italy",
            description: "A very big, scammy diamond",
            price: 40,
            available: "true",
            photo : "./image/diamond.jpg",
            add : 3,
            cart :0 ,
        }];

for (let i = 0; i <cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(produit[i]);
        totalcost(produit[i]);
    }
    )
}

//nombre d'item dans le panier

function onLoadCartNumbers (){
    let productNumber = localStorage.getItem('cartNumbers');
    
    if(productNumber) {
        document.getElementById('spanId').textContent = productNumber;
    }
}

function cartNumbers (produit) {
    let productNumber = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);

    if (productNumber) {
        localStorage.setItem('cartNumbers', productNumber + 1);
        document.getElementById('spanId').textContent = productNumber + 1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.getElementById('spanId').textContent = 1;
    }
    setItem(produit);
}

//Différents items

function setItem(produit) {
    let cartItem = localStorage.getItem('productInCart');
    cartItem = JSON.parse(cartItem);

    if (cartItem != null) {
        if(cartItem[produit.name] == undefined) {
            cartItem = {
                ...cartItem, [produit.name]: produit
            }
        }
        cartItem[produit.name].cart += 1;
    }
        else{
            cartItem = {
                [produit.name]: produit
            }
        }   
    localStorage.setItem('productInCart', JSON.stringify(cartItem));
}

//cout total

function totalcost(produit) {
    let cartCost = localStorage.getItem("totalCost")
    localStorage.setItem("totalCost", produit.price);

    if(cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", cartCost + produit.price);
    }else{
        localStorage.setItem("totalCost", produit.price);
    }
}

//Cart infos récup et display

function displayCart() {
    let cartItem = localStorage.getItem("productInCart");
    cartItem = JSON.parse(cartItem);
    let productContainer = document.querySelector(".productCart");
    let cartCost = localStorage.getItem("totalCost");

    if(cartItem && productContainer !==null) {
        productContainer.innerHTML ='';
        productContainer.innerHTML += `
        <button class="material-icons-outlined">
        highlight_off
        </button>`;
        Object.values(cartItem).map(item => {
            productContainer.innerHTML +=`
            <div class ="productPage"> 
                <div class ="prod"> 
                    <img src ="${item.photo}">
                    <span>${item.name}</span>
                </div>
                <div class = "price">
                    <p>${item.price}$ x ${item.cart} </p>
                </div>
            </div>  
            `
        });
        productContainer.innerHTML +=`
        <div class="totalPanier">
            <div>
            <h3 class ="panierTotalTitre">Prix total</h3>
            <h3 class ="panierTotal">$${cartCost}</h3>
            <button>BUY</button>
            </div>
        `;
    }
    else
    productContainer.innerHTML = `
    <div class = "nothingToSee">
        <h1>Vous n'avez rien sélectionné !!!, les hébergeurs, ça n'est pas gratuit!</h1>
        <br><br><br>
        <a class = "linkN" href="index.html" style="text-decoration: none;"> <h2>GO AND CONSUME</h2> </a>
    </div>
    `;
}

//Cart remove element 

function removeButton() {
    var removeButton = document.getElementsByClassName('material-icons-outlined');
    for(var i = 0; i < removeButton.length; i++){
        var button = removeButton[i];
        button.addEventListener('click',function(event){
            var buttonClicked = event.target;
            localStorage.clear();
            buttonClicked.parentElement.parentElement.parentElement.remove();
            location.reload()

        });
    };
}

//Cart New total


onLoadCartNumbers();
displayCart();
removeButton();
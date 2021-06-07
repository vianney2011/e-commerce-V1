var produit=
    [
        {
           id: 1,
            name: "Shoes",
            country: "France",
            description: "Une paire de chaussure.",
            price: 100,
            available: "true",
            photo : "./image/shoes.jpg",
            add : 1,
            cart :0,
        },{   
            id: 2,
            name: "Perfume",
            country: "Allemagne",
            description: "Pretty much the title.",
            price: 50,
            available: "true",
            photo : "./image/perfume.jpg",
            add : 2,
            cart :0,
        },{   
            id: 3,
            name: "Phone",
            country: "Great britain",
            description: "Un iphone Rs6.",
            price: 400,
            available: "true",
            photo : "./image/phone.jpg",
            add : 3,
            cart :0,
        },{   
            id: 4,
            name: "Scam diamond",
            country: "Italy",
            description: "A very big, scammy diamond.",
            price: 40,
            available: "true",
            photo : "./image/diamond.jpg",
            add : 3,
            cart :0,
        },{   
            id: 5,
            name: "Scarface",
            country: "Sicile",
            description: "Les autres en face sont jaloux.",
            price: 67000,
            available: "true",
            photo : "./image/scarface.jpg",
            add : 3,
            cart :0,
        },{   
            id: 6,
            name: "Petite Pince",
            country: "P.R.C",
            description: "Surely it's useful, and cheap",
            price: 3500,
            available: "true",
            photo : "./image/gene.jpg",
            add : 3,
            cart :0,
        }];

        document.getElementById("produit").innerHTML = `
        <div class = produitHeaderPage>
            <h2 class = "produitHead">Il y a ${produit.length} produits disponibles.</h2>
        </div>
        
        ${produit.map(function(produit) {
            return `
            <div class = produit>
            <img class = image>
                <img class = "produitPhoto" src = "${produit.photo}">
            </img>
                <h2 class = "produitName">${produit.name}</h2>
                
                <p class = "produitDes"><br><br><br> ${produit.description} <br><br><br>Provenance: ${produit.country}</p>
                <p class = "produitAddSect">
                <button class ="AddButton onclick"= "AddButton"> Purchase</button>
                <br><br><br><br>
                <span class = "produitPrix"> Le Prix : ${produit.price}$</span>
                </p>
                

            </div> `
        }).join('')}
        

        <h3 class = "footerProduit">La liste des partenaire grossit, revenez vite !</h3>
`;
let panier = document.querySelectorAll('.AddButton');




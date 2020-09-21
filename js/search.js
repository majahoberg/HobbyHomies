"use strict";


//Laurids


//Array med interesser

let _products = [

    {
        header: 'Floorball',
        month: '  28 januar 2021 at 20: 45',
        location: '  Nørre Allé 84, 8000 Aarhus C',
        imgjacob: 'img/jacob-rund.png',
        imgpernille: 'img/pernille-rund.png',
        imglaurids: 'img/laurids-rund.png',
        imgfloorball: 'img/floorball.jpg'

    },

    {
        header: 'Football',
        month: '  9 december 2020 at 17:00',
        location: '  Ringvej Syd 56, 8260 Viby J',
        imgjacob: 'img/tine-rund.png',
        imgpernille: 'img/maja-rund.png',
        imglaurids: 'img/laurids-rund.png',
        imgfloorball: 'img/fodbold.jpg'
    },


];

//Laurids

function appendProducts(products) {
    let htmlTemplate = "";
    for (const product of products) {
        htmlTemplate += `
        <a class="meeutup_link" href="#meetup">
<div class="hvid_boks">
    <h2 class="floorball">${product.header}</h2>
    <p class="meetup_info"><img src="img/clock (1).svg" width="5%" onkeyup="search(this.value)">${product.month}</p>
        <p class="meetup_info"><img src="img/pin (1).svg" width="4%">${product.location}</p>

            <div class="hvid_boks_img">
                <img src="${product.imgjacob}" width="16%">
                    <img src="${product.imgpernille}" width="16%">
                        <img src="${product.imglaurids}" width="16%">
        </div>
                        <img class="floorball_img" src="${product.imgfloorball}" width="100%">
</div>
</a>

            
                        
      
`;
    }
    document.querySelector(".bokse").innerHTML = htmlTemplate;
}
appendProducts(_products);




//Laurids



//Søgefunktion

function search(value) {
    console.log(value);

    let searchValue = value.toLowerCase();

    let filteredProducts = [];

    for (const product of _products) {
        let header = product.header.toLowerCase();
        let month = product.month.toLowerCase();
        let location = product.location.toLowerCase();

        if (header.includes(searchValue) || header.includes(searchValue) || month.includes(searchValue) || location.includes(searchValue)) {
            filteredProducts.push(product);



        }
    };

    appendProducts(filteredProducts);

}
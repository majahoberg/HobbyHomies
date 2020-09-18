"use strict";


//Laurids


//Array med interesser

let _searcharray = [

    {
        header: 'Floorball',
        month: 'Januar'
    },

    {
        header: 'Football',
        month: 'December'
    }

];


//Laurids


//Søgefunktion

function search(value) {
    console.log(value);

    let searchValue = value.toLowerCase();

    let filteredProducts = [];

    for (const product of _searcharray) {
        let header = product.header.toLowerCase();
        let month = product.month.toLowerCase();

        if (header.includes(searchValue) || header.includes(searchValue)) {
            filteredProducts.push(product);



        }
    };

    search(filteredProducts);

}
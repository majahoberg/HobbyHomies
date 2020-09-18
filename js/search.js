"use strict";


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




//Søgefunktion

function search(value) {
    console.log(value);

    let searchValue = value.toLowerCase();

    let filteredProducts = [];

    for (const product of _searcharray) {
        let header = header.toLowerCase();
        let month = month.toLowerCase();

        if (header.includes(searchValue) || header.includes(searchValue)) {
            filteredProducts.push(product);



        }
    };
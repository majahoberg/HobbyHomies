"use strict";

let _categories = [];


async function getCategories() {
  let response = await fetch("http://majahoberg.dk/wordpress/wp-json/wp/v2/posts");
  let data = await response.json();
  console.log(data);
  _categories = data;
  appendCategories(_categories);
}

getCategories()


// append movies to the DOM

function appendCategories(categories) {
  // TODO: append movies to #movies-container
  let template = "";
  console.log(categories);

  for (const category of categories) {
    template += /*html*/ `
      <article>
        <h2>${category.title.rendered}</h2>
      </article>
      `;
  }

  console.log(template);
  document.querySelector("#select-category").innerHTML = template;

}

// hobby api link: https://gist.githubusercontent.com/carlelieser/884584d06b2d9429f321ec192f6dc7b5/raw/0888b5449ecda4787001b74811e645d0a74b8132/hobbies.json
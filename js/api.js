"use strict";

let _categories = [];
let _posts = [];


async function getCategories() {
  let response = await fetch("http://majahoberg.dk/wordpress/wp-json/wp/v2/categories");
  let data = await response.json();
  console.log(data);
  _categories = data;
  appendCategories(_categories);
}

async function getPosts() {
  let response = await fetch("http://majahoberg.dk/wordpress/wp-json/wp/v2/posts");
  let data = await response.json();
  console.log(data);
  _posts = data; 
  appendPosts(_posts);
}


getPosts()
getCategories()


// append categories to the DOM

function appendCategories(categories) {
  // TODO: append movies to #movies-container
  let template = "";
  console.log(categories);

  for (let category of categories) {
    template += /*html*/ `
      <button>${category.name}</button>
      `;
  }

  console.log(template);
  document.querySelector("#categories").innerHTML = template;

}

// append posts to the DOM  

function appendPosts(posts) {
  let template = "";
  console.log(posts);

  for(let post of posts) {
    template += /*html*/ `
    <p>${post.title.rendered}</p>
    `;
  }

  console.log(template);
  document.querySelector("#posts").innerHTML = template; 

}



// hobby api link: https://gist.githubusercontent.com/carlelieser/884584d06b2d9429f321ec192f6dc7b5/raw/0888b5449ecda4787001b74811e645d0a74b8132/hobbies.json
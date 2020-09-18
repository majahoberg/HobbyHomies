"use strict";

let _posts = [];


async function getPosts() {
  let response = await fetch("http://majahoberg.dk/wordpress/wp-json/wp/v2/posts");
  let data = await response.json();
  console.log(data);
  _posts = data; 
  appendPosts(_posts);
}


getPosts()
// append posts to the DOM  ORIGINAL

function appendPosts(posts) {
  let template = "";
  console.log(posts);

  for(let post of posts) {
    template += /*html*/ `      
      <button class="accordion">${post.title.rendered}</button>
      <div class="panel">
        ${post.content.rendered}
      </div>
    `;
  }
  console.log(template);
  document.querySelector("#posts").innerHTML = template; 

}



// hobby api link: https://gist.githubusercontent.com/carlelieser/884584d06b2d9429f321ec192f6dc7b5/raw/0888b5449ecda4787001b74811e645d0a74b8132/hobbies.json
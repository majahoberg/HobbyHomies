"use strict";

// Maja

let _posts = [];

// fetch fra wordpress api
async function getPosts() {
  let response = await fetch("http://majahoberg.dk/wordpress/wp-json/wp/v2/posts");
  let data = await response.json();
  console.log(data);
  _posts = data; 
  appendPosts(_posts);
}

getPosts()

// append posts (både over-kategorierne og under-kategorierne) to the DOM
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
  initAccordion(); 
}

function initAccordion() {
// accordion fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion (Tine & Maja)
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

}




// en alternativ accordion løsning, som heller ikke virker helt (Maja) taget herfra: https://www.w3schools.com/w3css/w3css_accordions.asp
//function appendPosts(posts) {
//  let template = "";
//  console.log(posts);

//  for(let post of posts) {
//    template += /*html*/ `      
//      <button onclick="myFunction('Demo1')" class="w3-btn w3-block w3-black w3-left-align">${post.title.rendered}</button>
//      <div id="Demo1" class="w3-container w3-hide">
//        ${post.content.rendered}
//      </div>
//    `;
//  }
//  console.log(template);
//  document.querySelector("#posts").innerHTML = template; 
//}

//function myFunction(id) {
//  let x = document.getElementById(id);
//  if (x.className.indexOf("w3-show") == -1) {
//    x.className += " w3-show";
//  } else {
//    x.className = x.className.replace(" w3-show", "");
//  }
//}

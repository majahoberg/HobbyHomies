"use strict";

//(Maja, Tine hjalp med API i wordpress)
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

//(Tine, Maja og Pernille)
// append posts (både over-kategorierne og under-kategorierne) to the DOM
function appendPosts(posts) {
  let template = "";
  console.log(posts);

  for (let post of posts) {
    template += /*html*/ `      
      <button class = "accordion"> ${post.title.rendered} <img src="img/graa-pil-ned.png" class="graa-pil-ned"> <img src="img/orange-pil-op.png" class="orange-pil-op"> </button>
      <div class="panel">
        ${post.content.rendered} <img src = "img/graa-cirkel.png" onclick = "this.src='img/gul-v-tegn.png'">
      </div>
    `;
  }
  console.log(template);
  document.querySelector("#posts").innerHTML = template;
  initAccordion();
}


function initAccordion() {
  
  // Tine & Maja - accordion fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion 
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
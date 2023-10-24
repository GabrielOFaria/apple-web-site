const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

const imagem = document.querySelector('#product-image');
const menu = document.querySelector('#navbar');



buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });
        const button = e.target;
        const id = button.getAttribute("id");
        console.log(id);

        button.querySelector(".color").classList.add("selected");
        image.classList.add("changing");

        image.setAttribute("src", `img/iphone_${id}.jpg`)

        setTimeout(() => {
            image.classList.toggle('changing');
        }, 200);
  });
});


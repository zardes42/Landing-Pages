let next = document.getElementById("next");
let prev = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

next.onclick = () => {
  showSlider("next");
};
prev.onclick = () => {
  showSlider("prev");
};
let runTimeout ;
let tImeRunning = 3000;
let autoNext = 7000;
let runAutoSlider = setInterval(()=>{
        next.click();
    },autoNext)

const showSlider = (type) => {

  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type == "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add(type);
  } else {
    let position = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[position]);
    thumbnailDom.prepend(itemThumbnail[position]);
    carouselDom.classList.add(type);
  }



clearTimeout(runTimeout)
clearInterval(runAutoSlider);
 runTimeout = setTimeout(() => {
    carouselDom.classList.remove(type);
  }, tImeRunning);

  runAutoSlider = setInterval(()=>{
    next.click();
},autoNext)

};






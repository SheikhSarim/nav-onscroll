const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const icon =  document.querySelector("span");
const butt = document.querySelector(".nav_butt");


const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      icon.classList.add("fffbbss");
    } else {
      header.classList.remove("nav-scrolled");
      icon.classList.remove("fffbbss");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

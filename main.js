const dts = document.querySelectorAll('.container__faq dt');
console.log(dts);
const activeClass = 'active';

dts.forEach((dt) => {
  dt.addEventListener("click", () => {
    dt.classList.toggle("active");
    dt.nextElementSibling.classList.toggle("active");
  });
});



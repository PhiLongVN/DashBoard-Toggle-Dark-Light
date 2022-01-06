const checkBlock = document.querySelector(".check-block");
const checkBox = document.querySelector("#checkbox");

checkBox.onchange = () => {
  document.body.classList.toggle("active");
};

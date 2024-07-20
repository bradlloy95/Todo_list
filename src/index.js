import "./style.css";
import "./modules/model";
import "./modules/newTask";
import "./modules/loadTask";
import { renderToDos } from "./modules/loadTask";
import { renderHomePage } from "./modules/home";

// render home page when loaded
document.addEventListener("DOMContentLoaded", (event) => {
  renderHomePage();
});

const homeBTN = document.getElementById("homeBTN");
homeBTN.addEventListener("click", function () {
  renderHomePage();
});

// menu.js
import aMenu from "./MenuList.js";

aMenu.init();
document.querySelector("#addDish").addEventListener("click", function () {
  const dishNum = document.querySelector("#dishNumber").value;
  aMenu.changeEnrollment(dishNum);
});
document.querySelector("#removeDish").addEventListener("click", function () {
  const dishNum = document.querySelector("#dishNumber").value;
  aMenu.changeEnrollment(dishNum, false);
});
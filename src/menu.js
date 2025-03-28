import dish1 from "./assets/dish1.jpg";
import dish2 from "./assets/dish2.jpg";
import dish3 from "./assets/dish3.jpg";
import dish6 from "./assets/dish6.jpg";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Clear previous content

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  menuDiv.innerHTML = `
    <h2>Our Menu</h2>
    <div class="menu-items">
      <div class="menu-item">
        ${dish1 ? `<img src="${dish1}" alt="Dish 1">` : `<div class="menu-item-placeholder">Dish 1 Image</div>`}
        <h3>Dish 1</h3>
      </div>
      <div class="menu-item">
        ${dish2 ? `<img src="${dish2}" alt="Dish 2">` : `<div class="menu-item-placeholder">Dish 2 Image</div>`}
        <h3>Dish 2</h3>
      </div>
      <div class="menu-item">
        ${dish3 ? `<img src="${dish3}" alt="Dish 3">` : `<div class="menu-item-placeholder">Dish 3 Image</div>`}
        <h3>Dish 3</h3>
      </div>
      <div class="menu-item">
        ${dish6 ? `<img src="${dish6}" alt="Dish 4">` : `<div class="menu-item-placeholder">Dish 4 Image</div>`}
        <h3>Dish 4</h3>
      </div>
    </div>
  `;
  content.appendChild(menuDiv);
}

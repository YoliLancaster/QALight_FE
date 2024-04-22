import { services } from "./helpers/services.js";

const grid = document.querySelector(".grid");

grid.innerHTML = "";

const cardItem = createCard(services);
grid.innerHTML = cardItem;

function createCard(data) {
  return data
    .map(
      ({ id, service, description, image }) =>
        `<div class="card-container">
            <div class="img-wrapper">
                <img src="./img/${image}.png" alt="" class="card-icon" />
              </div>

              <div class="card-bottom">
                <h3 class="card-title">${service}</h3>
                <p class="card-text">
                  ${description}
                </p>
              </div>
              </div>`
    )
    .join("");
}

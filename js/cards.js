import { getClass, getPrice } from "./helpers.js";
import { handleDownloadClick } from "./arrow.js";

const cardsList = document.getElementById("cards");

export function renderCards(data) {
  const cards = data
    .map(
      (item) =>
        `<li class="card-container">
            <div class="amount-wrapper ${getClass(item)}">
              <p>
                $ ${item.amount} ${
          item.license_name.includes("Monthly")
            ? "<span>/MO</span>"
            : "<span>/PER YEAR</span>"
        }
              </p>
              ${
                item.amount_html
                  ? `
              <p class="old-price">${getPrice(item.amount_html)}</p>
              `
                  : ""
              }
            </div>
            <div class="card-overlay">
              <p>${item.name_prod}</p>
              <p>${item.license_name}</p>
              <a id="download" data-type="download" href=${
                item.link
              } class="svg-button"
                ><img src="images/button.svg" alt="button Download" data-type="download"/>
                <span data-type="download" class="button-text">DOWNLOAD</span>
              </a>
            </div>
          </li>`
    )
    .join("");

  cardsList.insertAdjacentHTML("beforeend", cards);

  cardsList.addEventListener("click", handleDownloadClick);
}

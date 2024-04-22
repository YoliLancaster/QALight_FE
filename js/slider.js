import { fetchData } from "./helpers/fetch.js";
import { reviews } from "./helpers/reviews.js";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

async function initSlider() {
  const data = await fetchData();

  const slide = document.querySelector(".swiper-slide");
  const sliderWrapper = document.querySelector(".swiper-wrapper");

  sliderWrapper.innerHTML = "";

  function getReviewData(reviews) {
    return reviews.map((review) => review.review);
  }

  const reviewItems = getReviewData(reviews);

  function createSliderMarkup(data) {
    return data
      .map(
        ({ id, name, picture, location }, index) =>
          `<div class="swiper-slide" data-swiper-autoplay="7000">
          <div class="thumbnail">
                  <img src="${picture.large}" />
                </div>
                <div class="aside">
                  <p>
                    ${reviewItems[index]}
                  </p>
                  <div class="name">
                    <h3>${name.first} ${name.last}</h3>
                    <p>${location.city}, ${location.country}</p>
                  </div></div>
                </div>`
      )
      .join("");
  }

  const slideItem = createSliderMarkup(data);
  sliderWrapper.innerHTML = slideItem;

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    autoHeight: true,
    loop: true,
    speed: 700,
    autoplay: true,
    parallax: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

initSlider();

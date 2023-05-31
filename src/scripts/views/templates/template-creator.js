/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const createCafeItemTemplate = (cafe) => `
    <a href="/#/detail-page/${cafe.id}" class="card">
        <div class="picture">
            <picture>
                <source class="lazyload" type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL + cafe.pictureId}">
                <source class="lazyload" media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + cafe.pictureId}">
                <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + cafe.pictureId}" alt="${cafe.name}" tabindex="0" crossorigin="anonymous">
            </picture>
            <p tabindex="0" class="city-templates">📍 ${cafe.city}</p>
        </div>
        <div class="description">
            <p tabindex="0" class="title">${cafe.name}</p>
            <p tabindex="0" class="rating">⭐️ ${cafe.rating}</p>
            <p tabindex="0" class="card-description">${cafe.description}</p>
        </div>
    </a>
`;

const createCafeDetailTemplate = (cafe) => `
    <p tabindex="0" class="title">${cafe.name}</p>
    <section class="detail-cafe">
        <div class="image-cafe">
            <picture>
                <source class="lazyload" type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL + cafe.pictureId}">
                <source class="lazyload" media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + cafe.pictureId}">
                <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + cafe.pictureId}" alt="${cafe.name}" tabindex="0" crossorigin="anonymous">
            </picture>
            <div class="costumer-riview">
                <span tabindex="0">Costumer Riviews :</span>
                <div class="costumer">
                    ${cafe.customerReviews.reduce((show, value) => show.concat(`
                        <p tabindex="0">${value.name} <span tabindex="0">${value.date}</span></p>
                        <p class="riview" tabindex="0">${value.review}</p>
                    `), '')}
                </div>
            </div>
        </div>
        <div class="description-cafe">
            <p tabindex="0" class="rating"><span>Rating :</span> ${cafe.rating}</p>
            <p tabindex="0" class="adress"><span>Address :</span> ${cafe.address}</p>
            <p tabindex="0" class="city"><span>City :</span> ${cafe.city}</p>
            <p tabindex="0" class="description"><span>Description :</span> ${cafe.description}</p>
            <div class="menus">
                <div class="foods">
                    <p><span tabindex="0">🥗 Menu Foods:</span> ${cafe.menus.foods.reduce((show, value) => show.concat(`<li tabindex="0">${value.name}</li>`), '')}</p>
                </div>
                <div class="foods">
                    <p><span tabindex="0">🍹 Menu Drinks:</span> ${cafe.menus.drinks.reduce((show, value) => show.concat(`<li tabindex="0">${value.name}</li>`), '')}</p>
                </div>
            </div>
        </div>
    </section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this cafe" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this cafe" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export default createCafeItemTemplate;
export {
  createCafeItemTemplate,
  createCafeDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

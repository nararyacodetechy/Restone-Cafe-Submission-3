import UrlParser from '../../routes/url-parser';
import RestaurantApi from '../../data/restaurant-api-source';
import {
  createCafeDetailTemplate,
  createLikeButtonTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailPage = {
  async render() {
    return `
      <div id="detail-cafe" class="container-detail-cafe"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cafe = await RestaurantApi.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail-cafe');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    detailContainer.innerHTML = createCafeDetailTemplate(cafe);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      cafe: {
        id: cafe.id,
        name: cafe.name,
        description: cafe.description,
        city: cafe.city,
        address: cafe.address,
        pictureId: cafe.pictureId,
        categories: cafe.categories,
        menus: cafe.menus,
        rating: cafe.rating,
        customerReviews: cafe.customerReviews,
      },
    });
  },
};

export default DetailPage;

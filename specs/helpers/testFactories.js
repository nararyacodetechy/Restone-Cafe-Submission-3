/* eslint-disable linebreak-style */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithCafe = async (cafe) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    cafe,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithCafe };

/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import FavoriteCafeIdb from '../src/scripts/data/favorite-restone-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Cafe', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteCafeIdb.putCafe({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteCafeIdb.deleteCafe(1);
  });

  it('should display unlike widget when the cafe has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this cafe"]')
    ).toBeTruthy();
  });

  it('should not display like widget when the cafe has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this cafe"]')
    ).toBeFalsy();
  });

  it('should be able to remove liked cafe from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    document
      .querySelector('[aria-label="unlike this cafe"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteCafeIdb.getAllCafes()).toEqual([]);
  });

  it('should not throw error if the unliked movie is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    await FavoriteCafeIdb.deleteCafe(1);

    document.querySelector('[aria-label="unlike this cafe"]').dispatchEvent(new Event('click'));

    expect(await FavoriteCafeIdb.getAllCafes()).toEqual([]);
  });
});

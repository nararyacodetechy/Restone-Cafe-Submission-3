/* eslint-disable no-new */
import FavoriteCafeIdb from '../../data/favorite-restone-idb';
// import { createCafeItemTemplate } from '../templates/template-creator';
import FavoriteCafeSearchView from './favoritte-cafes/favorite-search-view';
import FavoriteMovieShowPresenter from './favoritte-cafes/favorite-show-presenter';
import FavoriteCafeSearchPresenter from './favoritte-cafes/favorite-search-presenter';

const view = new FavoriteCafeSearchView();

const FavoritePage = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteMovieShowPresenter({ view, favoriteCafes: FavoriteCafeIdb });
    new FavoriteCafeSearchPresenter({ view, favoriteCafes: FavoriteCafeIdb });
  },
};

export default FavoritePage;

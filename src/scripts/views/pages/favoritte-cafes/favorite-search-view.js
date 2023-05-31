/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import { createCafeItemTemplate } from '../../templates/template-creator';

class FavoriteCafeSearchView {
  getTemplate() {
    return `
      <section class="list-content favorite-cafe">
        <form role="search" class="search-favorite">
            <input id="query" type="search" placeholder="Search" aria-label="Search">
            <button type="submit">Search</button>
        </form>
        <div class="container-favorite">
            <div class="list-cards" id="favorite-page">

            </div>
        </div>
      </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showCafes(cafes) {
    this.showFavoriteCafes(cafes);
  }

  showFavoriteCafes(cafes = []) {
    let html;
    if (cafes.length) {
      html = cafes.reduce(
        (carry, cafe) => carry.concat(createCafeItemTemplate(cafe)),
        ''
      );
    } else {
      html = this._getEmptyCafeTemplate();
    }

    document.getElementById('favorite-page').innerHTML = html;

    document
      .getElementById('favorite-page')
      .dispatchEvent(new Event('favorite-page:updated'));
  }

  _getEmptyCafeTemplate() {
    return '<div class="cafe-item__not__found cafes__not__found">Tidak ada Cafes untuk ditampilkan</div>';
  }
}

export default FavoriteCafeSearchView;

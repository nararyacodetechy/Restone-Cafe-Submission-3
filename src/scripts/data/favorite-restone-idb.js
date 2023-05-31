import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteCafeIdb = {
  async getCafe(id) {
    if (!id) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllCafes() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putCafe(cafe) {
    // eslint-disable-next-line no-prototype-builtins
    if (!cafe.hasOwnProperty('id')) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await dbPromise).put(OBJECT_STORE_NAME, cafe);
  },
  async deleteCafe(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchCafes(query) {
    return (await this.getAllCafes()).filter((cafe) => {
      const loweredCaseCafeTitle = (cafe.name || '-').toLowerCase();
      const jammedcafeTitle = loweredCaseCafeTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedcafeTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteCafeIdb;

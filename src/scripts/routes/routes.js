import HomePage from '../views/pages/home-page';
import DetailPage from '../views/pages/detail-page';
import FavoritePage from '../views/pages/favorite-page';

const Routes = {
  '/': HomePage, // default page
  '/home-page': HomePage,
  '/detail-page/:id': DetailPage,
  '/favorite-page': FavoritePage,
};

export default Routes;

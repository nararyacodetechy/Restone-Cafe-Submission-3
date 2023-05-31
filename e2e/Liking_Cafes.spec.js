/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/favorite-page');
});

Scenario('showing empty liked cafes', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada Cafes untuk ditampilkan', '.cafe-item__not__found');
});

Scenario('liking one cafe', async ({ I }) => {
  I.see('Tidak ada Cafes untuk ditampilkan', '.cafe-item__not__found');
  I.amOnPage('/');

  I.waitForElement('.card');
  I.click(locate('.card').first());

  const firstFilm = locate('.title').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-page');
  I.seeElement('.card');

  const likedFilmTitle = await I.grabTextFrom('.title');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('searching cafes', async ({ I }) => {
  I.see('Tidak ada Cafes untuk ditampilkan', '.cafe-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.card');

  const titles = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.card').at(i));
    I.waitForElement('#likeButton');
    I.click('#likeButton');

    // eslint-disable-next-line no-await-in-loop
    titles.push(await I.grabTextFrom('.container-detail-cafe .title'));
    I.amOnPage('/');
  }
  I.amOnPage('/#/favorite-page');
  I.seeElement('#query');
});

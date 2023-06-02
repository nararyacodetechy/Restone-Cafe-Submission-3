/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Cafes');

Before(({ I }) => {
  I.amOnPage('/#/favorite-page');
});

Scenario('showing empty liked cafes', ({ I }) => {
  I.waitForElement('#query');
  I.see('Tidak ada Cafes untuk ditampilkan', '.cafe-item__not__found');
});

Scenario('liking one cafe', async ({ I }) => {
  I.see('Tidak ada Cafes untuk ditampilkan', '.cafe-item__not__found');
  I.amOnPage('/');

  I.waitForElement('a.card');
  const firstCafe = locate('.title').first();

  const firstCafeTitle = await I.grabTextFrom(firstCafe);
  I.click(firstCafe);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-page');
  I.waitForElement('.card');
  const likedCafeTitle = await I.grabTextFrom('.title');

  assert.strictEqual(firstCafeTitle, likedCafeTitle);
});

Scenario('searching cafes', async ({ I }) => {
  I.see('Tidak ada Cafes untuk ditampilkan', '.cafe-item__not__found');

  I.amOnPage('/');

  I.waitForElement('a.card');

  const titles = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 3; i++) {
    I.click(locate('a.card').at(i));
    I.waitForElement('#likeButton');
    I.click('#likeButton');

    // eslint-disable-next-line no-await-in-loop
    titles.push(await I.grabTextFrom('.container-detail-cafe .title'));
    I.amOnPage('/');
  }
  I.amOnPage('/#/favorite-page');
  I.waitForElement('#query');
});

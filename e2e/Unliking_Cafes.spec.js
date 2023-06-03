/* eslint-disable no-undef */
Feature('Unliking Cafes');

Before(({ I }) => {
  I.amOnPage('/#/favorite-page');
});

Scenario('unliking one favorite cafe', async ({ I }) => {
  I.see('Tidak ada Cafes untuk ditampilkan', '.cafe-item__not__found');

  I.amOnPage('/');

  I.waitForElement('a.card');
  I.click('a.card');

  locate('.title-favorite').first();

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-page');

  I.waitForElement('a.card');
  I.grabTextFrom('.title-card');

  I.click('a.card');

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-page');

  I.see('Tidak ada Cafes untuk ditampilkan', '.cafe-item__not__found');
});

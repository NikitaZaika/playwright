import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

  await page.click('text=CATEGORIES');
  await expect(page).toHaveURL('https://www.demoblaze.com/');

  await page.click('div:nth-child(4) .card a .card-img-top');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=4');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Add to cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=4#');

});
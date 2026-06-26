import { test, expect } from '@playwright/test';

test('login exitoso con usuario válido', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
test('login fallido con usuario incorrecto', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  await page.fill('#user-name', 'usuario_falso');
  await page.fill('#password', 'password_falso');
  await page.click('#login-button');
  
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
test('login fallido con usuario bloqueado', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});
test('verificar titulo pagina inventario tras login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
});
test('verificar placeholder del campo usuario', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  await expect(page.locator('#user-name')).toHaveAttribute('placeholder', 'Username');
});
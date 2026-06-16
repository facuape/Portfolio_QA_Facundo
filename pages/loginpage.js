import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('login exitoso con usuario válido', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('login fallido con usuario incorrecto', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('usuario_falso', 'password_falso');
  await expect(loginPage.errorMessage).toBeVisible();
});

test('login fallido con usuario bloqueado', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

test('verificar titulo pagina inventario tras login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
});

test('verificar placeholder del campo usuario', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await expect(loginPage.usernameInput).toHaveAttribute('placeholder', 'Username');
});
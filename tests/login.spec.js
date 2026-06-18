import { test, expect } from './fixtures.js';

test('login exitoso con usuario válido', async ({ page, loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('login fallido con usuario incorrecto', async ({ loginPage }) => {
  await loginPage.login('usuario_falso', 'password_falso');
  await expect(loginPage.errorMessage).toBeVisible();
});

test('login fallido con usuario bloqueado', async ({ loginPage }) => {
  await loginPage.login('locked_out_user', 'secret_sauce');
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

test('verificar titulo pagina inventario tras login', async ({ page, loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
});

test('verificar placeholder del campo usuario', async ({ loginPage }) => {
  await expect(loginPage.usernameInput).toHaveAttribute('placeholder', 'Username');
});

import { test, expect } from './fixtures.js';
import { InventoryPage } from '../pages/InventoryPage.js';

test('agregar un producto al carrito', async ({ page, loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addProductToCart('sauce-labs-backpack');
  await expect(inventoryPage.cartBadge).toHaveText('1');
});

test('agregar dos productos al carrito', async ({ page, loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addProductToCart('sauce-labs-backpack');
  await inventoryPage.addProductToCart('sauce-labs-bike-light');
  await expect(inventoryPage.cartBadge).toHaveText('2');
});

test('verificar que se muestran 6 productos en inventario', async ({ page, loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.inventoryItems).toHaveCount(6);
});
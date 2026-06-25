import { test, expect } from './fixtures.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test('flujo completo de compra - login a checkout exitoso', async ({ page, loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addProductToCart('sauce-labs-backpack');
  await inventoryPage.goToCart();
  
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.goToCheckout();
  await checkoutPage.fillInfo('Facundo', 'Perez', '7000');
  await checkoutPage.continueToOverview();
  await checkoutPage.finishOrder();
  
  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});
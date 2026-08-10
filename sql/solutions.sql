-- Soluciones. No las mires antes de intentar exercises.md por tu cuenta:
-- el valor de esto es que te trabes, busques en RECURSOS_Y_LINKS.md o en
-- sqlbolt.com, y recién después confirmes acá.

-- NIVEL 1
-- 1.1
SELECT name, price FROM products;
-- 1.2
SELECT name, price FROM products ORDER BY price DESC;
-- 1.3
SELECT name, price FROM products ORDER BY price DESC LIMIT 1;
-- 1.4
SELECT username, created_at FROM users WHERE created_at >= '2026-02-01';

-- NIVEL 2
-- 2.1
SELECT name, stock FROM products WHERE stock = 0;
-- 2.2
SELECT name, category, price FROM products WHERE category = 'ropa' AND price < 20;
-- 2.3
SELECT id, user_id, status FROM orders WHERE status != 'cancelled';

-- NIVEL 3
-- 3.1
SELECT orders.id, orders.order_date, users.username
FROM orders
JOIN users ON orders.user_id = users.id;
-- 3.2
SELECT order_items.order_id, products.name, order_items.quantity
FROM order_items
JOIN products ON order_items.product_id = products.id;
-- 3.3
SELECT orders.id AS order_id, users.username, products.name AS product, order_items.quantity
FROM orders
JOIN users ON orders.user_id = users.id
JOIN order_items ON order_items.order_id = orders.id
JOIN products ON order_items.product_id = products.id;

-- NIVEL 4
-- 4.1
SELECT users.username
FROM users
LEFT JOIN orders ON orders.user_id = users.id
WHERE orders.id IS NULL;
-- 4.2
SELECT products.name
FROM products
LEFT JOIN order_items ON order_items.product_id = products.id
WHERE order_items.id IS NULL;

-- NIVEL 5
-- 5.1
SELECT users.username, SUM(order_items.quantity * order_items.unit_price) AS total_gastado
FROM orders
JOIN users ON orders.user_id = users.id
JOIN order_items ON order_items.order_id = orders.id
WHERE orders.status = 'completed'
GROUP BY users.username;
-- 5.2
SELECT products.name, SUM(order_items.quantity) AS cantidad_vendida
FROM order_items
JOIN products ON order_items.product_id = products.id
GROUP BY products.name
ORDER BY cantidad_vendida DESC;
-- 5.3
SELECT status, COUNT(*) AS cantidad
FROM orders
GROUP BY status;

-- NIVEL 6
-- 6.1
INSERT INTO products (id, name, category, price, stock) VALUES (7, 'Sauce Labs Cap', 'accesorios', 12.50, 25);
-- 6.2
UPDATE products SET stock = stock - 1 WHERE id = 1;
-- 6.3
DELETE FROM order_items WHERE order_id = (SELECT id FROM orders WHERE status = 'cancelled');
DELETE FROM orders WHERE status = 'cancelled';

-- NIVEL 7 (escenario QA real)
-- 7.1
SELECT orders.id, users.username, orders.order_date, orders.status
FROM orders
JOIN users ON orders.user_id = users.id
WHERE users.username = 'facundo_qa'
ORDER BY orders.order_date DESC
LIMIT 1;
-- 7.2
SELECT orders.id,
       SUM(order_items.quantity * order_items.unit_price) AS total_calculado
FROM orders
JOIN order_items ON order_items.order_id = orders.id
WHERE orders.id = 4
GROUP BY orders.id;

# Ejercicios de SQL para QA

Base de datos de práctica tipo e-commerce, con los mismos 6 productos de SauceDemo que ya automatizaste con Playwright. La idea es que conectes SQL con algo que ya conocés, no que sea abstracto.

**Cómo usarlo:** abrí `practica_qa.db` con [DB Browser for SQLite](https://sqlitebrowser.org/) (gratis, ya está en tu `RECURSOS_Y_LINKS.md`), o generá la base corriendo `schema.sql` y después `seed_data.sql` en la pestaña "Execute SQL". Intentá cada ejercicio ahí antes de mirar `solutions.sql`.

Estructura de las tablas: `users` (usuarios), `products` (los 6 productos de SauceDemo), `orders` (pedidos, con estado `completed` / `cancelled` / `pending`), `order_items` (los productos dentro de cada pedido, con cantidad y precio unitario).

---

## Nivel 1 — SELECT básico

1.1 Listá todos los productos con su nombre y precio.

1.2 Listá los productos ordenados por precio, de mayor a menor.

1.3 Mostrá solo el producto más caro (pista: `ORDER BY` + `LIMIT`).

1.4 Listá los usuarios registrados a partir del 1 de febrero de 2026.

## Nivel 2 — WHERE con más condiciones

2.1 Encontrá los productos sin stock.

2.2 Encontrá los productos de la categoría `'ropa'` que cuesten menos de 20.

2.3 Listá los pedidos que NO estén cancelados.

## Nivel 3 — JOIN (INNER)

3.1 Listá cada pedido junto con el `username` del usuario que lo hizo (vas a necesitar unir `orders` con `users`).

3.2 Listá los items de cada pedido mostrando el nombre del producto, no solo su ID (unir `order_items` con `products`).

3.3 Armá una sola consulta que muestre, por cada línea de pedido: el ID del pedido, el username, el nombre del producto y la cantidad. (Vas a necesitar unir tres tablas.)

## Nivel 4 — LEFT JOIN

4.1 Encontrá los usuarios que **nunca** hicieron un pedido. (Pista: `LEFT JOIN` desde `users` hacia `orders`, y quedate con los que no tienen match.)

4.2 Encontrá los productos que **nunca** fueron vendidos.

## Nivel 5 — GROUP BY y funciones de agregación

5.1 Calculá el total gastado por cada usuario, considerando solo pedidos `completed`.

5.2 Calculá la cantidad total vendida de cada producto (sumando todas sus apariciones en `order_items`).

5.3 Contá cuántos pedidos hay por cada estado (`completed`, `cancelled`, `pending`).

## Nivel 6 — INSERT / UPDATE / DELETE

6.1 Insertá un producto nuevo (elegí vos los datos).

6.2 Actualizá el stock de un producto para reflejar que se vendió una unidad.

6.3 Eliminá un pedido cancelado y sus items asociados (ojo con el orden: primero borrá lo que depende de la orden, después la orden).

## Nivel 7 — Escenario real de QA

Este nivel simula lo que realmente harías en el trabajo: automatizaste una compra con Playwright (tu `checkout.spec.js` real) y ahora necesitás confirmar en la base de datos que la operación se guardó bien.

7.1 Escribí la query que verificaría que el usuario `facundo_qa` tiene un pedido reciente con estado `completed`.

7.2 Escribí la query que verifica que el total de un pedido específico coincide con la suma de sus items — un chequeo de integridad típico después de un checkout.

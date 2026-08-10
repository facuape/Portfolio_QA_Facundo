# SQL para QA

Práctica de SQL (Bloque 1 del roadmap) con una base de datos propia, en vez de ejercicios genéricos.

## Contenido

- `schema.sql` — define 4 tablas (`users`, `products`, `orders`, `order_items`) simulando una tienda tipo SauceDemo.
- `seed_data.sql` — carga datos de prueba, con los mismos 6 productos que ya automatizaste en `tests/Inventory.spec.js` y `tests/checkout.spec.js`.
- `exercises.md` — 21 ejercicios progresivos: SELECT, WHERE, JOIN, LEFT JOIN, GROUP BY, INSERT/UPDATE/DELETE, y un nivel final con el escenario real de QA (validar en base de datos algo que automatizaste en la app).
- `solutions.sql` — soluciones. Intentá primero por tu cuenta.

## Cómo correrlo

1. Instalá [DB Browser for SQLite](https://sqlitebrowser.org/) (gratis).
2. Creá una base nueva (`New Database`), guardala como `practica_qa.db` en esta carpeta.
3. Andá a la pestaña **Execute SQL**, pegá el contenido de `schema.sql` y ejecutalo.
4. Pegá el contenido de `seed_data.sql` y ejecutalo.
5. Ya podés escribir tus propias queries en esa misma pestaña para resolver `exercises.md`.

También funciona con la extensión de SQLite en VS Code, o con `sqlite3` por línea de comandos si lo tenés instalado.

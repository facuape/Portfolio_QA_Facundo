-- Datos de prueba. Incluye casos "raros" a propósito (un usuario sin
-- pedidos, un producto nunca vendido, un pedido cancelado) porque son
-- justo los casos que un QA necesita saber consultar.

INSERT INTO users (id, username, email, created_at) VALUES
    (1, 'standard_user',   'standard@saucedemo.com',   '2026-01-05'),
    (2, 'problem_user',    'problem@saucedemo.com',    '2026-01-12'),
    (3, 'performance_user','performance@saucedemo.com','2026-02-01'),
    (4, 'facundo_qa',      'facundo@example.com',      '2026-02-20'),
    (5, 'visitor_user',    'visitor@example.com',      '2026-03-01');  -- nunca hizo un pedido

INSERT INTO products (id, name, category, price, stock) VALUES
    (1, 'Sauce Labs Backpack',              'mochilas', 29.99, 12),
    (2, 'Sauce Labs Bike Light',            'accesorios', 9.99, 34),
    (3, 'Sauce Labs Bolt T-Shirt',          'ropa', 15.99, 0),
    (4, 'Sauce Labs Fleece Jacket',         'ropa', 49.99, 5),
    (5, 'Sauce Labs Onesie',                'ropa', 7.99, 20),
    (6, 'Test.allTheThings() T-Shirt (Red)','ropa', 15.99, 40);  -- producto 6: nunca fue pedido

INSERT INTO orders (id, user_id, order_date, status) VALUES
    (1, 1, '2026-02-10', 'completed'),
    (2, 1, '2026-03-02', 'completed'),
    (3, 2, '2026-02-15', 'cancelled'),
    (4, 4, '2026-03-05', 'completed'),
    (5, 3, '2026-03-06', 'pending');

INSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES
    (1, 1, 1, 1, 29.99),   -- order 1: backpack
    (2, 1, 2, 2, 9.99),    -- order 1: 2 bike lights
    (3, 2, 4, 1, 49.99),   -- order 2: fleece jacket
    (4, 3, 3, 1, 15.99),   -- order 3 (cancelada): bolt t-shirt
    (5, 4, 1, 1, 29.99),   -- order 4: backpack
    (6, 4, 5, 3, 7.99),    -- order 4: 3 onesies
    (7, 5, 2, 1, 9.99);    -- order 5 (pending): bike light

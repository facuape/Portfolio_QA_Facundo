import { test, expect } from '@playwright/test';

test('GET posts desde jsonplaceholder', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  
  expect(response.status()).toBe(200);
  
  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
});
test('GET un post especifico por ID', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  
  expect(response.status()).toBe(200);
  
  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty('title');
});
test('POST crear un nuevo post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'Mi primer post de QA',
      body: 'Probando POST con Playwright',
      userId: 1,
    },
  });
  
  expect(response.status()).toBe(201);
  
  const body = await response.json();
  expect(body.title).toBe('Mi primer post de QA');
});
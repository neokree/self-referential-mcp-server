const request = require('supertest');
const app = require('../src/index');

describe('Server Tests', () => {
  test('Health check endpoint returns ok status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
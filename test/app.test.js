const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('returns JSON with message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello, DevSecOps!');
  });
});

const request = require('supertest');
const app = require('../index');
const User = require('../models/userModel');

describe('Authorization', () => {
  it('should allow admin to access admin route', async () => {
    const admin = await User.create({ name: 'Admin', email: 'admin@test.com', password: 'password123', role: 'admin' });
    const token = await admin.generateAuthToken();

    const res = await request(app)
      .get('/api/admin/users')
      .set('Authorization', `Bearer ${token}`)
      .send();

    expect(res.status).toBe(200);
  });

  it('should not allow user to access admin route', async () => {
    const user = await User.create({ name: 'User', email: 'user@test.com', password: 'password123', role: 'user' });
    const token = await user.generateAuthToken();

    const res = await request(app)
      .get('/api/admin/users')
      .set('Authorization', `Bearer ${token}`)
      .send();

    expect(res.status).toBe(403);
  });
});

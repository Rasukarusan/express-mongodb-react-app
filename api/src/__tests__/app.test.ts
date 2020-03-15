import { Types } from 'mongoose';
const request = require('supertest');
const app = require('../app');
import db from '../database/connection';
import {response} from 'express';

describe('Serer Apis', () => {
  beforeAll(() => {
    db.on('open', () => {
      console.log('Database starts successfully');
    });
  });

  beforeEach(() => {
    if (db.collection('orders').countDocuments()) {
      return db.collection('orders').deleteMany({});
    }
  });

  afterAll(() => {
    return db.close();
  });
});

describe('POST /orders', () => {
  it('should create orders successfully!!', async () => {
  const {status, body } = await request(app).post('/orders').attach('file', __dirname + '/files/order.csv');
  expect(status).toBe(200);
  expect(body.msg).toBe('Upload OK!');
  });
});

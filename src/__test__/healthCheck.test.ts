import request from 'supertest';
import express from 'express';
import appInstance from '../app';
import { configurations } from '../utils/config';


describe('API Integration Tests', () => {
    let app: express.Application ;

    beforeAll(async () => {
        await appInstance.startServer(configurations.port);
        app=appInstance.getApp()
      });

      
  test('GET /data/health', async () => {
    const response = await request(app).get('/data/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      Health: 'OK',
    });
  });
});

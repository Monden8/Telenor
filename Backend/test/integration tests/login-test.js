/* eslint-disable no-unused-expressions */
const app = require('../../src/index');
const chai = require('chai');
const { before, after } = require('mocha');
const request = require('supertest');

const { expect } = chai;

describe('API Tests Login', () => {
  before((done) => {
    app.connectToDatabase();
    done();
  });
  after((done) => {
    app.disconnectFromDatabase();
    done();
  });

  const data = { username: 'newuser', password: 'morethan8', email: '123456789@gmail.com' };

  it('/register success', (done) => {
    request(app.app)
      .post('/register')
      .send(data)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(200);
          done();
        }
      });
  });

  it('/login success', (done) => {
    request(app.app)
      .post('/login')
      .send({ username: 'newuser', password: 'morethan8' })
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.body.rt).not.to.be.null;
          expect(res.body.t).not.to.be.null;
          expect(res.body.data).not.to.be.null;
          done();
        }
      });
  });

  it('/login fields are not filled', (done) => {
    request(app.app)
      .post('/login')
      .send({ username: 'newuser', password: undefined })
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(400);
          expect(res.body).to.equal('All fields are required.');
          done();
        }
      });
  });

  it('/login username field is not filled', (done) => {
    request(app.app)
      .post('/login')
      .send({ username: '', password: '123456789' })
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(400);
          expect(res.body).to.equal('All fields are required.');
          done();
        }
      });
  });

  it('/login password field is not filled', (done) => {
    request(app.app)
      .post('/login')
      .send({ username: 'infinite', password: '' })
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(400);
          expect(res.body).to.equal('All fields are required.');
          done();
        }
      });
  });

  it('/login user not found', (done) => {
    request(app.app)
      .post('/login')
      .send({ username: 'infinitea', password: '12345678' })
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(400);
          done();
        }
      });
  });
});

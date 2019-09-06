/* eslint-disable no-unused-expressions */
const app = require('../../src/index');
const chai = require('chai');
const request = require('supertest');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;

describe('API Tests Register to be unsuccessful', () => {
  it('/register access', (done) => {
    request(app.app)
      .post('/register')
      .end((err, res) => {
        expect(res.status).not.to.be.null;
        done(err);
      });
  });

  it('/register without password', (done) => {
    request(app.app)
      .post('/register')
      .send({ username: 'New', password: '', email: 'new' })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Please fill in all fields!');
        done(err);
      });
  });

  it('/register without email', (done) => {
    request(app.app)
      .post('/register')
      .send({ username: 'New', password: 'new', email: '' })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal('error');
        expect(res.body.message).to.equal('Please fill in all fields!');
        done(err);
      });
  });

  it('/register without username', (done) => {
    request(app.app)
      .post('/register')
      .send({ username: '', password: '', email: '' })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.status).to.equal('error');
        expect(res.body.message).to.equal('Please fill in all fields!');
        done(err);
      });
  });
});


describe('API Tests Register to be successful', () => {
  beforeEach((done) => {
    app.connectToDatabase();
    done();
  });
  afterEach((done) => {
    app.disconnectFromDatabase();
    done();
  });


  it('/register success', (done) => {
    const data = { username: 'noranora', password: 'morethan8', email: 'nora@nora.com' };
    request(app.app)
      .post('/register')
      .send(data)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).to.equal(200);
          expect(res.body.rt).not.to.be.null;
          expect(res.body.t).not.to.be.null;
          expect(res.body.datas).not.to.be.null;
          done();
        }
      });
  });
});

/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { testUser, accounts } from '../testUtils/mock';
import createUser from '../testUtils/createTestAccount';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Test account', () => {
  before(async () => {
    await createUser();
  });
  describe('POST /', () => {
    it('should create user account', (done) => {
      chai.request(app)
        .post('/api/v1/users')
        .send(testUser)
        .end((err, res) => {
          console.log(err)
          res.should.have.status(201);
          res.body.should.be.an('object');
          res.body.user.should.have.property('email').eql(testUser.email);
          res.body.user.should.have.property('name').eql(testUser.name);
          done();
        });
    });
  });
  it('should login account', (done) => {
    chai.request(app)
      .post('/api/v1/users/login')
      .send(accounts[0])
      .end((err, res) => {
        console.log(err)
        res.should.have.status(200);
        res.body.user.should.be.an('object');
        res.body.user.should.have.property('email').eql(accounts[0].email);
        done();
      });
  });
});

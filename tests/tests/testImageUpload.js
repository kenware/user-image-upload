/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import AWS from 'aws-sdk';
import * as sinon from 'sinon';
import app from '../../server';
import config from '../../server/config'
import createUser from '../testUtils/createTestAccount';

// Configure chai
chai.use(chaiHttp);
chai.should();
let userData;
describe('Test topics endpoints', () => {
  before(async () => {
    userData = await createUser();
  });

  describe('POST /', () => {
    it('should upload image', (done) => {
      const payload = {}
      let sinonSandbox = sinon.createSandbox();
        sinonSandbox.stub(config.s3, 'upload').returns({
            promise: function () {
                return Promise.resolve({ Location: 'new'});
            }
        });
      chai.request(app)
        .post('/api/v1/images/upload')
        .set('authorization', `Bearer ${userData[0].token}`)
        .attach('image', "tests/testUtils/logo.png")
        .send(payload)
        .end((err, res) => {
          console.log(res.body)
          res.should.have.status(201);
          res.body.should.be.an('object');
          done();
        });
    }).timeout(10000);
  });
});

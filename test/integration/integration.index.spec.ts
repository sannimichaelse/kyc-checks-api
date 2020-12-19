import * as request from 'supertest';
import {
    expect
} from 'chai';
import app from '../../server';
const agent = request(app);

describe('Index Endpoints', () => {

    it('Should call base API', function(done) {
        agent
            .get('/')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.status).to.equal('success');
                expect(res.body.code).to.equal(200);
                expect(res.body.message).to.equal('Welcome to KYC Checks API');
                done();
            });
    });

     it('Should call api/v1', function(done) {
        agent
            .get('/api/v1')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.status).to.equal('success');
                expect(res.body.code).to.equal(200);
                expect(res.body.message).to.equal('Welcome to KYC Checks API Version 1');
                done();
            });
    });

     it('Should return route not found', function(done) {
        agent
            .get('/api/v1/ndjhdjdjjd')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.code).to.equal(404);
                expect(res.body.message).to.equal('Ooops, route not found');
                done();
            });
    });
});
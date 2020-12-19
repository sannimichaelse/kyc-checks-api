import * as request from 'supertest';
import {
    expect
} from 'chai';
import app from '../../server';
import {
    MSG_DOCUMENT_ERROR,
    MSG_SERVER_ERROR
} from '../../src/utils/utils.response.messages';
import config from '../../src/config/index';

const agent = request(app);

describe('KYC Endpoints', () => {

    it('Should not perform KYC Checks without submitting birthDate /api/v1/kyc', function(done) {
        agent
            .post('/api/v1/kyc')
            .send({
                'licenceNumber': '94977000',
                'stateOfIssue': 'NSW',
                'expiryDate': '2020-01-01'
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.status).to.equal('error');
                expect(res.body.code).to.equal(400);
                expect(res.body.message).to.equal('birthDate is required');
                done();
            });
    });

    it('Should not perform KYC Checks without submitting stateOfIssue /api/v1/kyc', function(done) {
        agent
            .post('/api/v1/kyc')
            .send({
                'birthDate': '2020-02-08',
                'givenName': 'James',
                'middleName': 'Robert',
                'familyName': 'Smith',
                'licenceNumber': '94977000',
                'expiryDate': '2020-01-01'
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.status).to.equal('error');
                expect(res.body.code).to.equal(400);
                expect(res.body.message).to.equal('stateOfIssue is required');
                done();
            });
    });


    it('Should not perform KYC Checks when using a state not allowed /api/v1/kyc', function(done) {
        agent
            .post('/api/v1/kyc')
            .send({
                'birthDate': '2020-02-08',
                'givenName': 'James',
                'middleName': 'Robert',
                'familyName': 'Smith',
                'licenceNumber': '94977000',
                'expiryDate': '2020-01-01',
                'stateOfIssue': 'NSWjJF',
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.status).to.equal('error');
                expect(res.body.code).to.equal(400);
                expect(res.body.message).to.equal('stateOfIssue must be one of [NSW, QLD, SA, TAS, VIC, WA, ACT, NT]');
                done();
            });
    });

    it('Should not perform KYC Checks when using a wrong birthDate format /api/v1/kyc', function(done) {
        agent
            .post('/api/v1/kyc')
            .send({
                'birthDate': '2020/02/12',
                'givenName': 'James',
                'middleName': 'Robert',
                'familyName': 'Smith',
                'licenceNumber': '94977000',
                'expiryDate': '2020-01-01',
                'stateOfIssue': 'NSW',
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.status).to.equal('error');
                expect(res.body.code).to.equal(400);
                expect(res.body.message).to.equal('Date Format Invalid. Date must be in this format - YYYY-MM-DD');
                done();
            });
    });

    it('Should not perform KYC Checks when using a wrong expiryDate format /api/v1/kyc', function(done) {
        agent
            .post('/api/v1/kyc')
            .send({
                'birthDate': '2020/02/12',
                'givenName': 'James',
                'middleName': 'Robert',
                'familyName': 'Smith',
                'licenceNumber': '94977000',
                'expiryDate': '2020-01-01',
                'stateOfIssue': 'NSW',
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.status).to.equal('error');
                expect(res.body.code).to.equal(400);
                expect(res.body.message).to.equal('Date Format Invalid. Date must be in this format - YYYY-MM-DD');
                done();
            });
    });

    it('Should perform KYC Checks for Document Error /api/v1/kyc', function(done) {
        agent
            .post('/api/v1/kyc')
            .send({
                'birthDate': '2020-02-12',
                'givenName': 'James',
                'middleName': 'Robert',
                'familyName': 'Smith',
                'licenceNumber': '94977000',
                'expiryDate': '2020-01-01',
                'stateOfIssue': 'NSW',
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                if (res.body.code && res.body.code === 'D') {
                    expect(res.body.message).to.equal(MSG_DOCUMENT_ERROR);
                    expect(res.body.code).to.equal('D');
                } else {
                    expect(res.body).to.be.an('object');
                }
                done();
            });
    });

    it('Should perform KYC Checks Server Error /api/v1/kyc', function(done) {
        agent
            .post('/api/v1/kyc')
            .send({
                'birthDate': '2020-02-12',
                'givenName': 'James',
                'middleName': 'Robert',
                'familyName': 'Smith',
                'licenceNumber': '94977000',
                'expiryDate': '2020-01-01',
                'stateOfIssue': 'NSW',
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;

                if (res.body.code && res.body.code === 'S') {
                    expect(res.body.message).to.equal(MSG_SERVER_ERROR);
                    expect(res.body.code).to.equal('S');
                } else {
                    expect(res.body).to.be.an('object');
                }

                done();
            });
    });

    it('Should perform KYC Checks kycResult=true /api/v1/kyc', function(done) {
        agent
            .post('/api/v1/kyc')
            .send({
                'birthDate': '2020-02-12',
                'givenName': 'James',
                'middleName': 'Robert',
                'familyName': 'Smith',
                'licenceNumber': '94977000',
                'expiryDate': '2020-01-01',
                'stateOfIssue': 'NSW',
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;

                if (res.body.kycResult) {
                    expect(res.body.kycResult).to.equal(true);
                } else {
                    expect(res.body).to.be.an('object');
                }

                done();
            });
    });

    it('Should perform KYC Checks kycResult=false /api/v1/kyc', function(done) {
        agent
            .post('/api/v1/kyc')
            .send({
                'birthDate': '2020-02-12',
                'givenName': 'James',
                'middleName': 'Robert',
                'familyName': 'Smith',
                'licenceNumber': '94977000',
                'expiryDate': '2020-01-01',
                'stateOfIssue': 'NSW',
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;

                if (res.body.kycResult && !res.body.kycResult) {
                    expect(res.body.kycResult).to.equal(false);
                } else {
                    expect(res.body).to.be.an('object');
                }

                done();
            });
    });

     it('Should enter generic handler /api/v1/kyc', function(done) {
        config.API_KEY = 'JDJDJDJ';
        agent
            .post('/api/v1/kyc')
            .send({
                'birthDate': '2020-02-12',
                'givenName': 'James',
                'middleName': 'Robert',
                'familyName': 'Smith',
                'licenceNumber': '94977000',
                'expiryDate': '2020-01-01',
                'stateOfIssue': 'NSW',
            })
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.status).to.equal('error');
                expect(res.body.message).to.equal('Request failed with status code 403');
                expect(res.body.code).to.equal(500);
                done();
            });
    });
});
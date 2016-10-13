//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");
var Book = require('../app/models/book');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Books', function () {
    beforeEach(function (done) { //Before each test we empty the database
        Book.remove({}, function (err) {
            done();
        });
    });
    /*
     * Test the /GET route
     */
    describe('/GET book', function () {
        it('it should GET all the books', function (done) {
            chai.request(server)
                .get('/book')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

});
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    suite('Translation with text and locale fields', function () {
        test('POST request to /api/translate', function (done) {
            chai.request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favorite fruit.",
                    locale: "american-to-british"
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.text, "Mangoes are my favorite fruit.");
                    assert.equal(res.body.translation, `Mangoes are my <span class="highlight">favourite</span> fruit.`);
                    done();
                });
        });
    });

    suite('Translation with empty text', function () {
        test('POST request to /api/translate', function (done) {
            chai.request(server)
                .post('/api/translate')
                .send({
                    text: "",
                    locale: "american-to-british"
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.error, "No text to translate");
                    done();
                });
        });
    });

    suite('Translation with missing text field', function () {
        test('POST request to /api/translate', function (done) {
            chai.request(server)
                .post('/api/translate')
                .send({
                    locale: "american-to-british"
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.error, "Required field(s) missing");
                    done();
                });
        });
    });

    suite('Translation with missing locale field', function () {
        test('POST request to /api/translate', function (done) {
            chai.request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favorite fruit."
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.error, "Required field(s) missing");
                    done();
                });
        });
    });

    suite('Translation with text and invalid locale field', function () {
        test('POST request to /api/translate', function (done) {
            chai.request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favorite fruit.",
                    locale: "american-to-american"
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.error, "Invalid value for locale field");
                    done();
                });
        });
    });

    suite('Translation with text that needs no translation', function () {
        test('POST request to /api/translate', function (done) {
            chai.request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favourite fruit.",
                    locale: "american-to-british"
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.text, "Mangoes are my favourite fruit.");
                    assert.equal(res.body.translation, "Everything looks good to me!");
                    done();
                });
        });
    });

});
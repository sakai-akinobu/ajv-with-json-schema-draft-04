const {describe, it, before, beforeEach} = require('mocha');
const assert = require('assert');
const Ajv = require('ajv');


describe('tests/index-test.js', function() {
  let ajv;

  before(function() {
    ajv = new Ajv({schemaId: 'id'});
    ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
  });

  describe('simple', function() {
    let simpleSchema;
    let validate;
    let jsons;

    beforeEach(function() {
      simpleSchema = require('../schemas/simple');
      validate = ajv.compile(simpleSchema);
      jsons = require('../jsons/simple');
    });

    it('valid', function() {
      const result = validate(jsons.validJson);
      assert.strictEqual(result, true);
    });

    it('invalid name property', function() {
      const result = validate(jsons.invalidNameJson);
      assert.strictEqual(result, false);
      assert.strictEqual(validate.errors.length, 1);
    });

    it('invalid additional property', function() {
      const result = validate(jsons.invalidAdditionalPropertyJson);
      assert.strictEqual(result, false);
      assert.strictEqual(validate.errors.length, 1);
    });
  });
});

module.exports = {
  "id": "id",
  "$schema": 'http://json-schema.org/draft-04/schema#',
  "type": "object",
  "properties": {
    "user": {
      "type": 'object',
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": "string",
        },
        "age": {
          "type": "number",
        }
      }
    }
  }
};

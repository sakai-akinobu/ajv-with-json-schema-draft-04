const validJson = {
  user: {
    name: 'name',
    age: 28,
  }
};

const invalidNameJson = {
  user: {
    name: 12,
    age: 28,
  }
};

const invalidAdditionalPropertyJson = {
  user: {
    name: 'name',
    age: 28,
    invalidProperty: false,
  }
};

module.exports = {
  validJson,
  invalidNameJson,
  invalidAdditionalPropertyJson,
};

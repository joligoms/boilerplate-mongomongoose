require('dotenv').config();
require('./database.js');

const Person = require('./models/person.js');

const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'João Gomes',
    age: 20,
    favoriteFoods: ['Strogonoff', 'Curry', 'Falafel', 'Avocado Toast'],
  });

  person.save((err, data) => errorHandler(err, data, done));
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => errorHandler(err, data, done));
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName })
    .exec((err, data) => errorHandler(err, data, done));
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food })
    .exec((err, data) => errorHandler(err, data, done));
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

function errorHandler (err, data, done) {
  if (err) return done(err);

  return done(null, data);
}

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

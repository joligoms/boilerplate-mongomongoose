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
  Person.findById(personId)
    .exec((err, data) => errorHandler(err, data, done));
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  findPersonById(personId, (err, person) => {
    person.favoriteFoods.push(foodToAdd);
    person.save((err, data) => errorHandler(err, data, done));
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true })
    .exec((err, data) => errorHandler(err, data, done));
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId)
    .exec((err, data) => errorHandler(err, data, done));
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({ name: nameToRemove })
    .exec((err, data) => errorHandler(err, data, done));
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({favoriteFoods: foodToSearch})
    .sort({ name: 'asc' })
    .limit(2)
    .select({age: 0})
    .exec((err, data) => errorHandler(err, data, done));
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

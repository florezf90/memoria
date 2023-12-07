const sequelize = require('../config/connection');

const seedUser = require('./user-routes');
const seedCharactersheet = require('./Charactersheet')
const seedOrigin = require('./origin');
const seedFocus = require('./focus');
const seedRace = require('./race');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await seedUser();

    await seedRace();

    await seedFocus();

    await seedOrigin();

    await seedCharactersheet();
  
    process.exit(0);
};

seedDatabase();

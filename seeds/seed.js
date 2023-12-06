const sequelize = require('../../memoria/config/connection');

const seedUser = require('./user-routes');
const seedCharactersheet = require('./Charactersheet')

const seedRace = require('./race');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await seedUser();

    await seedCharactersheet();
  
    await seedRace();

    process.exit(0);
};

seedDatabase();

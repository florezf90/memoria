const sequelize = require('../config/connection');

const seedUser = require('./user-routes');
const seedCharactersheet = require('./Charactersheet')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await seedUser();

    await seedCharactersheet();
  
    process.exit(0);
  };
  
  seedDatabase();
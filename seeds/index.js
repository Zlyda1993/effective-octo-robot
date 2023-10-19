const sequelize = require('../config/connection');
const seedUser = require('./userData.js');
const seedBook = require('./bookData.js');
const seedComment = require('./commentData.js');

const seedAll = async () => {
    await sequelize.sync ({ force: true});

    await seedUser();
    
    await seedBook();

    await seedComment();

    process.exit(0)
};

seedAll();
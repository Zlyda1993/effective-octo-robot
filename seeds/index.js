const sequelize = require('../models/index.js')
const userData = require('./bookData.js')

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0)
};

seedDatabase();
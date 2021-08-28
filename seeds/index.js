const sequelize = require('../config/connection');
const seedBlogger = require('./bloggerData');
const seedBlogpost = require('./blogpostData');

const seedAll = async () => {
    await sequelize.sync({
        force: true
    });

    await seedBlogger();

    await seedBlogpost();

    process.exit(0);
};

seedAll();